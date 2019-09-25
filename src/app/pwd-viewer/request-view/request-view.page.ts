import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';
import { ShelterModelPage } from '../../shelter-model/shelter-model.page';
import { TranslateConfigService } from '../../translate-config.service';
@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.page.html',
  styleUrls: ['./request-view.page.scss'],
})
export class RequestViewPage {

  json;
  map: Map;
  selectedLanguage:string;
  constructor(private http: HttpClient, private modalCtrl: ModalController, public alertController: AlertController, private router: Router, public navCtrl: NavController, private translateConfigService: TranslateConfigService) {
  this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
 }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
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
      interface Options {
          id?: string;
          attribution?: string;
          minZoom?: number;
          maxZoom?: number;
      }
      var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr,minZoom: 5, maxZoom:25} as Options),
      streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr,minZoom: 5, maxZoom:25} as Options);
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

          let imageBounds: [number, number] | [[number, number], [number, number]];
          var imageUrl = 'assets/img/flood.png';
              imageBounds = [[33.2687500007805, 131.50425], [33.2747916674473, 131.511564444445]];
          var flood_img =  L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
          control.addOverlay(flood_img,'Flooded Area');

          var currentIcon = new L.Icon({
                 iconSize: [25, 25],
                 iconAnchor: [12, 35],
                 shadowSize: [50, 25],
                 shadowAnchor: [12, 35],
                 popupAnchor: [6, -30],
                 iconUrl: 'assets/icon/favicon.png',
                });
          L.marker([33.273073, 131.505804], {icon: currentIcon}).addTo(this.map).bindPopup("Your Location");
    }
    async presentAlertConfirm() {
     const alert = await this.alertController.create({
       header: 'We found a volunteer for you.',
       message: 'Mr. Justin B.<br> <img src="https://i.stack.imgur.com/l60Hf.png">',
       buttons: [
         {
           text: 'Cancel',
           role: 'cancel',
           cssClass: 'secondary',
           handler: (blah) => {
             console.log('Cancel');
           }
         }, {
           text: 'Accept',
           handler: () => {
             this.router.navigate(['/tracking-pwdviwe']);
             // L.marker([33.271692, 131.506094], {icon: volunteerLocationIcon}).addTo(this.map).bindPopup("Volunteer");
             // var element = <HTMLInputElement> document.getElementById("request-btn");
             //  element.hidden = true;
           }
         }
       ]
     });

     await alert.present();
   }

    /** Remove map when we have multiple map object */
    ionViewWillLeave() {
      this.map.remove();
    }
  }
