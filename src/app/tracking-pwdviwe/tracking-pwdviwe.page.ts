import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as L from "leaflet";
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
import { ModalController } from '@ionic/angular';
import { VolunteerInfoPage } from '../volunteer-info/volunteer-info.page';
declare let L;
@Component({
  selector: 'app-tracking-pwdviwe',
  templateUrl: './tracking-pwdviwe.page.html',
  styleUrls: ['./tracking-pwdviwe.page.scss'],
})
export class TrackingPwdviwePage {
  json;
  constructor(private http: HttpClient, private modalCtrl: ModalController, private router : Router) {}

  async showVolunteerInfo() {
    const modal = await this.modalCtrl.create({
      component: VolunteerInfoPage,
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
      this.map = new Map('map3').setView([33.273073, 131.505804], 16);
      tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'edupala.com © ionic LeafLet',
      }).addTo(this.map);

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

      var yourLocationIcon = new L.Icon({
             iconSize: [25, 25],
             iconAnchor: [12, 35],
             shadowSize: [50, 25],
             shadowAnchor: [12, 35],
             popupAnchor: [6, -30],
             iconUrl: 'assets/icon/your-location.png'
            });
          L.marker([33.27083, 131.50271], {icon: shelterIcon}).addTo(this.map).bindPopup("Shelter");
          L.marker([33.273073, 131.505804], {icon: yourLocationIcon}).addTo(this.map).bindPopup("Mr.Justin B").openPopup();
          L.marker([33.271073, 131.506804], {icon: currentIcon}).addTo(this.map).bindPopup("Your Location");

    }

    /** Remove map when we have multiple map object */
    ionViewWillLeave() {
      this.map.remove();
    }

    cancelEvent() {
         this.ionViewWillLeave();
         this.router.navigate(['/pwd-view/tabs/pwd-view']);
    }

}
