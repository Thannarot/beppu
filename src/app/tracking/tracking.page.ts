import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as L from "leaflet";
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ModalController } from '@ionic/angular';
import { PwdToolkitPage } from '../pwd-toolkit/pwd-toolkit.page';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage {
  json;
  constructor(private http: HttpClient, private modalCtrl: ModalController) {}

  async showToolKit() {
    const modal = await this.modalCtrl.create({
      component: PwdToolkitPage,
      componentProps: {
        data: "Mr. Smith Yagoshi"
      }
    });
    return await modal.present();
  }

  async closeTrackingModel(){
    await this.modalCtrl.dismiss();
  }

  map: Map;

    ionViewDidEnter() { this.leafletMap(); }

    leafletMap() {
      // In setView add latLng and zoom
      this.map = new Map('mapId').setView([33.273073, 131.505804], 16);
      tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'edupala.com © ionic LeafLet',
      }).addTo(this.map);

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

      var currentIcon = new L.Icon({
             iconSize: [25, 25],
             iconAnchor: [12, 35],
             shadowSize: [50, 25],
             shadowAnchor: [12, 35],
             popupAnchor: [6, -30],
             iconUrl: 'assets/icon/current-location.png',
            });

      var shelterIcon = new L.Icon({
             iconSize: [25, 25],
             iconAnchor: [12, 35],
             shadowSize: [50, 25],
             shadowAnchor: [12, 35],
             popupAnchor: [6, -30],
             iconUrl: 'assets/icon/green-marker.png'
            });

      var pwdIcon = new L.Icon({
             iconSize: [25, 25],
             iconAnchor: [12, 35],
             shadowSize: [50, 25],
             shadowAnchor: [12, 35],
             popupAnchor: [6, -30],
             iconUrl: 'assets/icon/person.png'
            });
      this.http.get("https://bepputool.adpc.net/api/shelter/read.php").subscribe((json: any) => {
            console.log(json);
            this.json = json;
            L.geoJSON(this.json,{
              pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {icon: shelterIcon});
              },
              onEachFeature: function (feature, layer) {
                layer.on({
                  'click': function (e) {
                      }
                });
                layer.bindPopup('Shelter name: ' + feature.properties.name);
              }
            }).addTo(this.map);
          });

          var yourLocationIcon = new L.Icon({
                 iconSize: [25, 25],
                 iconAnchor: [12, 35],
                 shadowSize: [50, 25],
                 shadowAnchor: [12, 35],
                 popupAnchor: [6, -30],
                 iconUrl: 'assets/icon/your-location.png'
                });
          L.marker([33.273073, 131.505804], {icon: currentIcon}).addTo(this.map).bindPopup("Your Location");
          L.marker([33.271073, 131.506804], {icon: yourLocationIcon}).addTo(this.map).bindPopup("Mr. Smith Yagoshi").openPopup();

          // this.http.get("https://bepputool.adpc.net/api/mashi/read.php").subscribe((json: any) => {
          //   console.log(json);
          //   this.json = json;
          //   L.geoJSON(this.json,{
          //     style: function (feature) {
          //     return {
          //       'weight': 0.7,
          //       'color': 'blue',
          //       'dashArray': '10, 10',
          //       'dashOffset': '20',
          //       'fillColor' : 'lightskyblue',
          //       'fillOpacity': 0.2
          //     }
          //   },
          // }).addTo(this.map);
          // });
    }

    /** Remove map when we have multiple map object */
    ionViewWillLeave() {
      this.map.remove();
    }

}
