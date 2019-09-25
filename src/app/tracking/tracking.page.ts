import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as L from "leaflet";
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
import { ModalController } from '@ionic/angular';
import { PwdToolkitPage } from '../pwd-toolkit/pwd-toolkit.page';
declare let L;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage {
  json;
  constructor(private http: HttpClient, private modalCtrl: ModalController, private router : Router) {}

  async showToolKit() {
    const modal = await this.modalCtrl.create({
      component: PwdToolkitPage,
      componentProps: {
        data: "Mr. Smith Yagoshi"
      }
    });
    return await modal.present();
  }

    map: Map;
    controlRoute: any;

    ionViewDidEnter() { this.leafletMap(); }

    leafletMap() {
      // In setView add latLng and zoom
      this.map = new Map('map').setView([33.273073, 131.505804], 16);
      tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'edupala.com © ionic LeafLet',
      }).addTo(this.map);

      var currentIcon = new L.Icon({
             iconSize: [25, 25],
             iconAnchor: [12, 35],
             shadowSize: [50, 25],
             shadowAnchor: [12, 35],
             popupAnchor: [6, -30],
             iconUrl: 'assets/icon/favicon.png',
            });

      var shelterIcon = new L.Icon({
             iconSize: [25, 25],
             iconAnchor: [12, 35],
             shadowSize: [50, 25],
             shadowAnchor: [12, 35],
             popupAnchor: [6, -30],
             iconUrl: 'assets/icon/house-people.png'
            });

      var pwdLocationIcon = new L.Icon({
             iconSize: [25, 25],
             iconAnchor: [12, 35],
             shadowSize: [50, 25],
             shadowAnchor: [12, 35],
             popupAnchor: [6, -30],
             iconUrl: 'assets/icon/your-location.png'
            });
          L.marker([33.27083, 131.50271], {icon: shelterIcon}).addTo(this.map).bindPopup("Shelter");
          L.marker([33.273073, 131.505804], {icon: currentIcon}).addTo(this.map).bindPopup("Your Location");
          L.marker([33.271073, 131.506804], {icon: pwdLocationIcon}).addTo(this.map).bindPopup("Mr. Smith Yagoshi").openPopup();

    }

    /** Remove map when we have multiple map object */
    ionViewWillLeave() {
      this.map.remove();
    }

    btn_txt = 'PICK UP';
    btn_color = "dark";
    showRoutingHeading2PWD() {var currentIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/favicon.png',
          });

    var shelterIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/house-people.png'
          });

    var yourLocationIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/your-location.png'
          });
      if (this.btn_txt == 'PICK UP') {
      this.controlRoute = L.Routing.control({
            waypoints: [
                L.latLng(33.273073, 131.505804),
                L.latLng(33.271073, 131.506804)
            ],
            lineOptions: {
               styles: [{color: 'red', opacity: 1, weight: 3}]
            },
            routeWhileDragging: false,
             createMarker:function(i, wp, nWps){
             if (i === 0) {
             return L.marker(wp.latLng, {icon: currentIcon });
             }else{
             return L.marker(wp.latLng, {icon: yourLocationIcon });
           }
         }
        }).addTo(this.map);
          this.btn_txt = 'GO TO SHELTER';
       }
       else if (this.btn_txt == 'GO TO SHELTER') {
         this.btn_txt = 'DONE';
         this.btn_color = 'success';
         this.map.removeControl(this.controlRoute);
         this.controlRoute = L.Routing.control({
             waypoints: [
                 L.latLng(33.271073, 131.506804),
                 L.latLng(33.27083, 131.50271)
             ],
             lineOptions: {
                styles: [{color: 'blue', opacity: 1, weight: 3}]
             },
             routeWhileDragging: false,
             show: false,
              createMarker:function(i, wp, nWps){
              if (i === 0) {
              return L.marker(wp.latLng, {icon: yourLocationIcon });
              }else{
              return L.marker(wp.latLng, {icon: shelterIcon });
            }
          }
         }).addTo(this.map);
       }
       else{
         this.map.removeControl(this.controlRoute);
         this.ionViewWillLeave();
         this.router.navigate(['/tabs/map']);
       }
    }

}
