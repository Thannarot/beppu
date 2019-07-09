import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import * as L from "leaflet";

@Component({
  selector: 'app-mapinfo-model',
  templateUrl: './mapinfo-model.page.html',
  styleUrls: ['./mapinfo-model.page.scss'],
})
export class MapinfoModelPage {
  public  map: L.Map;
  public json;
  public options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: ""
      })
    ],
    zoom: 15,
    center: L.latLng(33.269184, 131.509363)
  };

  constructor(private http: HttpClient, private modelCtrl: ModalController) {}

  async closeMapModel(){
    await this.modelCtrl.dismiss();
  }
  onMapReady(map: L.Map) {

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

    setTimeout(() => {
      map.invalidateSize();
    }, 1000);
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
    var yourLocationIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/your-location.png'
          });
    L.marker([33.269184, 131.509363], {icon: pwdIcon}).addTo(map).bindPopup("Finn");
    L.marker([33.272184, 131.509363], {icon: yourLocationIcon}).addTo(map).bindPopup("Your Location");
    L.marker([33.275917, 131.507993], {icon: shelterIcon}).addTo(map).bindPopup("Kusunokimachi, Beppu, Oita 874-0943, Japan");
    L.marker([33.275872, 131.501223], {icon: shelterIcon}).addTo(map).bindPopup("Japan, 〒874-0937 Ōita-ken, Beppu-shi, Akibachō, 8−24 中村病院");
    L.marker([33.271692, 131.506094], {icon: shelterIcon}).addTo(map).bindPopup("9 Matsubarachō, Beppu-shi, Ōita-ken 874-0946, Japan");
  }
}
