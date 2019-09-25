import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as L from "leaflet";
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { ModalController } from '@ionic/angular';
import { PwdModelPage } from '../pwd-model/pwd-model.page';
import { ShelterModelPage } from '../shelter-model/shelter-model.page';
import { AppservicesService } from '../services/appservices.service';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-government-viewer',
  templateUrl: './government-viewer.page.html',
  styleUrls: ['./government-viewer.page.css'],
})
export class GovernmentViewerPage {
    json;

  selectedLanguage:string;
  constructor(private http: HttpClient, public modalCtrl: ModalController, public myService: AppservicesService, private translateConfigService: TranslateConfigService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
  async presentModalPwd() {
    const modal = await this.modalCtrl.create({
      component: PwdModelPage,
      componentProps: {
        data: "Finn"
      }
    });
    return await modal.present();
  }

  async presentModalShelter() {
    const modal = await this.modalCtrl.create({
      component: ShelterModelPage,
      componentProps: {
        data: "Thannarot K."
      }
    });
    return await modal.present();
  }
map: Map;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
      maxZoom: 25,
      minZoom: 5,
      subdomains:['mt0','mt1','mt2','mt3']
    });
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr,minZoom: 5, maxZoom:25}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr,minZoom: 5, maxZoom:25});
    var baseMaps = {
      "Grayscale": grayscale,
      "Streets": streets,
      "Satellite": googleSat
    };
    this.map = new Map('mapId').setView([33.273184, 131.509363], 16);
    grayscale.addTo(this.map);

    var control = new L.Control.Layers().addTo(this.map);
    control.setPosition('topright');

    var markerIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
    	   shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'leaflet/marker-icon.png',
           iconRetinaUrl: 'leaflet/marker-icon-2x.png',
           shadowUrl: 'leaflet/marker-shadow.png'
          });

    var shelterIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/house-people.png'
          });

    var pwdIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/person.png'
          });

    this.http.get("http://bepputool.adpc.net/api/shelter/read.php").subscribe((json: any) => {
          this.json = json;
          var shelter_layer = L.geoJSON(this.json,{
            pointToLayer: function(feature, latlng) {
              return L.marker(latlng, {icon: shelterIcon});
            },
            onEachFeature: function (feature, layer) {
              layer.on({
                'click': function (e) {
                     document.getElementById('modalShelterBtn').click();
                    }

              });
              layer.bindPopup('Shelter name: ' + feature.properties.name);
            }
          }).addTo(this.map);
          control.addOverlay(shelter_layer,'Shelter');
        });


        this.http.get("http://bepputool.adpc.net/api/pwd/read.php").subscribe((json: any) => {
          console.log(json);
          this.json = json;
          var pwd_layer = L.geoJSON(this.json,{
            pointToLayer: function(feature, latlng) {
              return L.marker(latlng, {icon: pwdIcon});
            },
            onEachFeature: function (feature, layer) {
                layer.on({
                  'click': function (e) {
                       document.getElementById('modalPwdBtn').click();
                      }

                });
              layer.bindPopup('PWD name: ' + feature.properties.name);
            }
          }).addTo(this.map);
          control.addOverlay(pwd_layer,'PWDs');
        });
        var currentIcon = new L.Icon({
               iconSize: [25, 25],
               iconAnchor: [12, 35],
               shadowSize: [50, 25],
               shadowAnchor: [12, 35],
               popupAnchor: [6, -30],
               iconUrl: 'assets/icon/favicon.png',
              });
        L.marker([33.273073, 131.505804], {icon: currentIcon}).addTo(this.map).bindPopup("Your Location");
        var imageUrl = 'assets/img/flood.png',
            imageBounds = [[33.2687500007805, 131.50425], [33.2747916674473, 131.511564444445]];
        var flood_img = new L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
        control.addOverlay(flood_img,'Flooded Area');

        // this.http.get("https://bepputool.adpc.net/api/building/read.php").subscribe((json: any) => {
        //   console.log(json);
        //   this.json = json;
        //   L.geoJSON(this.json,{
        //     style: function (feature) {
        //           return {
        //             'weight': 0.5,
        //             'color': 'red',
        //             'fillOpacity': 0
        //           }
        //         },
        //   }).addTo(this.map);
        // });
        //
        this.http.get("http://bepputool.adpc.net/api/mashi/read.php").subscribe((json: any) => {
          console.log(json);
          this.json = json;
          var mashi_layer = L.geoJSON(this.json,{
            style: function (feature) {
            return {
              'weight': 0.7,
              'color': 'blue',
              'dashArray': '10, 10',
              'dashOffset': '20',
              'fillColor' : 'lightskyblue',
              'fillOpacity': 0.2
            }
          },
        }).addTo(this.map);
        control.addOverlay(mashi_layer,'Mashi');
        });

  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
