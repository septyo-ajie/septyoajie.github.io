# 🚢 VMS Hybrid LoRa–Starlink

## Probabilistic Switching for Maritime Communication

---

## 📌 Overview

VMS Hybrid LoRa–Starlink is a maritime communication system
designed to combine LoRa and satellite communication.

The system uses probabilistic switching logic to determine
when communication should use LoRa and when satellite
communication should be activated.

---

## 🎯 Objectives

- Develop a hybrid maritime communication system
- Monitor LoRa communication quality
- Implement probabilistic switching
- Reduce unnecessary satellite activation
- Evaluate communication performance
- Analyze communication reliability

---

## 🏗️ System Architecture

```text
                    ┌─────────────┐
                    │   Vessel    │
                    └──────┬──────┘
                           │
                        ESP32
                           │
              ┌────────────┴────────────┐
              │                         │
           LoRa                    Starlink
              │                         │
              └────────────┬────────────┘
                           │
                   Switching Logic
                           │
                    Monitoring System

🔧 Hardware
ESP32
LoRa Module
GPS
Starlink Terminal
Sensors

💻 Software
C/C++
Python
MQTT
Data Processing
Data Visualization

📊 Communication Parameters

The system evaluates:

Parameter	  Description
RSSI	      Received Signal Strength
SNR	        Signal-to-Noise Ratio
PDR	        Packet Delivery Ratio
Latency	    Communication delay
Distance	  Vessel distance

🔄 Switching Concept
Communication Monitoring
          │
          ▼
    Calculate P_LoRa
          │
          ▼
    Evaluate Condition
          │
     ┌────┴────┐
     │         │
    LoRa    Starlink
     │         │
     └────┬────┘
          ▼
   Communication
      Monitoring

📈 Results

Project results, graphs, and experimental data
will be documented here.

📷 Documentation

Project images will be added here.


