import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from "leaflet";
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page {
  public  map: L.Map;
  public  json;
  public  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: ""
      })
    ],
    zoom: 15,
    center: L.latLng(33.269184, 131.509363)
  };
  constructor(private http: HttpClient, public modalCtrl: ModalController) { }

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

    this.http.get("https://bepputool.adpc.net/api/building/read.php").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json,{
        style: function (feature) {
              return {
                'weight': 0.5,
                'color': 'red',
                'fillOpacity': 0
              }
            },
      }).addTo(map);
    });

    this.http.get("https://bepputool.adpc.net/api/mashi/read.php").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json,{
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
      }).addTo(map);
    });

  }
}
