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

    this.http.get("https://bepputool.adpc.net/api/shelter/read.php").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json,{
        pointToLayer: function(feature, latlng) {
          return L.marker(latlng, {icon: markerIcon});
        },
        onEachFeature: function (feature, layer) {
          // layer.on({
          //   'click': function (e) {
          //     this.ShelterModelPage.presentModal();
          //       }
          //
          // });
          layer.bindPopup('Shelter name: ' + feature.properties.name);
        }
      }).addTo(map);
    });

    this.http.get("https://bepputool.adpc.net/api/pwd/read.php").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json,{
        pointToLayer: function(feature, latlng) {
          return L.marker(latlng, {icon: markerIcon});
        },
        onEachFeature: function (feature, layer) {
          // layer.on({
          //   'click': function (e) {
          //     this.ShelterModelPage.presentModal();
          //       }
          //
          // });
          layer.bindPopup('Person name: ' + feature.properties.name);
        }
      }).addTo(map);
    });

  }
}
