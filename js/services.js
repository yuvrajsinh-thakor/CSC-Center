const WHATSAPP_NUMBER = "919313626302"; // CHANGE THIS

function getServices() {
  const stored = localStorage.getItem("csc_services");
  if (stored) return JSON.parse(stored);
  return DEFAULT_SERVICES;
}

const DEFAULT_SERVICES = {
  "driving": [
    {
      "id": "dl1",
      "title": "New Driving Licence",
      "desc": "Apply for a fresh DL through official portal",
      "price": 1500,
      "icon": "fa-car",
      "category": "driving"
    },
    {
      "id": "dl2",
      "title": "New Learner Licence",
      "desc": "Get your learner licence to start driving legally",
      "price": 1500,
      "icon": "fa-id-card",
      "category": "driving"
    },
    {
      "id": "dl3",
      "title": "Driving Test Appointment",
      "desc": "Book your official driving test slot",
      "price": 300,
      "icon": "fa-calendar-check",
      "category": "driving"
    },
    {
      "id": "dl4",
      "title": "Exam Slot Booking",
      "desc": "Book exam slot for learner licence test",
      "price": 150,
      "icon": "fa-clock",
      "category": "driving"
    },
    {
      "id": "dl5",
      "title": "DL Renewal",
      "desc": "Renew your expired driving licence",
      "price": 400,
      "icon": "fa-sync-alt",
      "category": "driving"
    },
    {
      "id": "dl6",
      "title": "Duplicate DL",
      "desc": "Get duplicate DL in case of loss/damage",
      "price": 350,
      "icon": "fa-copy",
      "category": "driving"
    },
    {
      "id": "dl7",
      "title": "Address Update in DL",
      "desc": "Update residential address on your DL",
      "price": 250,
      "icon": "fa-map-marker-alt",
      "category": "driving"
    },
    {
      "id": "dl8",
      "title": "Name Correction in DL",
      "desc": "Correct name spelling errors in DL",
      "price": 250,
      "icon": "fa-edit",
      "category": "driving"
    },
    {
      "id": "dl9",
      "title": "International Driving Permit",
      "desc": "Apply for IDP to drive abroad",
      "price": 800,
      "icon": "fa-globe",
      "category": "driving"
    },
    {
      "id": "dl10",
      "title": "All RTO Related Services",
      "desc": "Any other RTO service handled here",
      "price": 200,
      "icon": "fa-building",
      "category": "driving"
    }
  ],
  "pan": [
    {
      "id": "pan1",
      "title": "New PAN Card",
      "desc": "Apply for a fresh PAN card",
      "price": 200,
      "icon": "fa-credit-card",
      "category": "pan"
    },
    {
      "id": "pan2",
      "title": "PAN Correction",
      "desc": "Correct details on existing PAN card",
      "price": 150,
      "icon": "fa-pen",
      "category": "pan"
    },
    {
      "id": "pan3",
      "title": "Instant E-PAN",
      "desc": "Get digital PAN instantly via Aadhaar",
      "price": 100,
      "icon": "fa-bolt",
      "category": "pan"
    },
    {
      "id": "pan4",
      "title": "Mobile Number Update",
      "desc": "Update mobile linked to PAN",
      "price": 100,
      "icon": "fa-mobile-alt",
      "category": "pan"
    },
    {
      "id": "pan5",
      "title": "Aadhaar Linking",
      "desc": "Link Aadhaar with PAN card",
      "price": 100,
      "icon": "fa-link",
      "category": "pan"
    },
    {
      "id": "pan6",
      "title": "Reprint PAN Card",
      "desc": "Get physical reprint of existing PAN",
      "price": 180,
      "icon": "fa-print",
      "category": "pan"
    },
    {
      "id": "pan7",
      "title": "Lost PAN Recovery",
      "desc": "Retrieve lost PAN details and reapply",
      "price": 200,
      "icon": "fa-search",
      "category": "pan"
    }
  ],
  "aadhaar": [
    {
      "id": "aad1",
      "title": "Aadhaar Update",
      "desc": "Update personal details in Aadhaar",
      "price": 100,
      "icon": "fa-fingerprint",
      "category": "aadhaar"
    },
    {
      "id": "aad2",
      "title": "Mobile Update",
      "desc": "Link new mobile number to Aadhaar",
      "price": 100,
      "icon": "fa-mobile-alt",
      "category": "aadhaar"
    },
    {
      "id": "aad3",
      "title": "Address Change",
      "desc": "Change residential address in Aadhaar",
      "price": 100,
      "icon": "fa-home",
      "category": "aadhaar"
    },
    {
      "id": "aad4",
      "title": "PVC Aadhaar Card",
      "desc": "Get durable PVC Aadhaar card printed",
      "price": 150,
      "icon": "fa-id-badge",
      "category": "aadhaar"
    }
  ],
  "voter": [
    {
      "id": "vot1",
      "title": "New Voter ID",
      "desc": "Register as new voter",
      "price": 100,
      "icon": "fa-vote-yea",
      "category": "voter"
    },
    {
      "id": "vot2",
      "title": "Voter ID Correction",
      "desc": "Correct errors in voter ID card",
      "price": 100,
      "icon": "fa-edit",
      "category": "voter"
    },
    {
      "id": "vot3",
      "title": "Voter Address Change",
      "desc": "Update address on voter ID",
      "price": 100,
      "icon": "fa-map",
      "category": "voter"
    }
  ],
  "passport": [
    {
      "id": "pas1",
      "title": "New Passport",
      "desc": "Apply for fresh Indian passport",
      "price": 500,
      "icon": "fa-passport",
      "category": "passport"
    },
    {
      "id": "pas2",
      "title": "Passport Renewal",
      "desc": "Renew your expiring passport",
      "price": 400,
      "icon": "fa-redo",
      "category": "passport"
    },
    {
      "id": "pas3",
      "title": "Appointment Booking",
      "desc": "Book passport seva kendra appointment",
      "price": 200,
      "icon": "fa-calendar",
      "category": "passport"
    }
  ],
  "certificates": [
    {
      "id": "cer1",
      "title": "Income Certificate",
      "desc": "Official income proof certificate",
      "price": 150,
      "icon": "fa-file-invoice",
      "category": "certificates"
    },
    {
      "id": "cer2",
      "title": "Caste Certificate",
      "desc": "SC/ST/OBC caste certificate",
      "price": 150,
      "icon": "fa-file-alt",
      "category": "certificates"
    },
    {
      "id": "cer3",
      "title": "Domicile Certificate",
      "desc": "Residential domicile certificate",
      "price": 150,
      "icon": "fa-file-contract",
      "category": "certificates"
    },
    {
      "id": "cer4",
      "title": "Birth Certificate",
      "desc": "Official birth registration certificate",
      "price": 150,
      "icon": "fa-baby",
      "category": "certificates"
    },
    {
      "id": "cer5",
      "title": "Death Certificate",
      "desc": "Official death registration certificate",
      "price": 150,
      "icon": "fa-file-medical",
      "category": "certificates"
    }
  ],
  "govt": [
    {
      "id": "gov1",
      "title": "E-Shram Card",
      "desc": "Register unorganised workers under E-Shram",
      "price": 100,
      "icon": "fa-hard-hat",
      "category": "govt"
    },
    {
      "id": "gov2",
      "title": "Ayushman Card",
      "desc": "Apply for PM Jan Arogya health card",
      "price": 100,
      "icon": "fa-heartbeat",
      "category": "govt"
    },
    {
      "id": "gov3",
      "title": "PM Kisan Registration",
      "desc": "Register for PM Kisan Samman Nidhi scheme",
      "price": 100,
      "icon": "fa-seedling",
      "category": "govt"
    },
    {
      "id": "gov4",
      "title": "PM Awas Yojana",
      "desc": "Apply for affordable housing scheme",
      "price": 150,
      "icon": "fa-house-user",
      "category": "govt"
    },
    {
      "id": "gov5",
      "title": "Labour Card",
      "desc": "Apply for state labour department card",
      "price": 150,
      "icon": "fa-id-card",
      "category": "govt"
    },
    {
      "id": "gov6",
      "title": "Ration Card",
      "desc": "Apply/update ration card",
      "price": 150,
      "icon": "fa-shopping-basket",
      "category": "govt"
    },
    {
      "id": "gov7",
      "title": "FASTag",
      "desc": "Apply for NHAI FASTag",
      "price": 200,
      "icon": "fa-tags",
      "category": "govt"
    },
    {
      "id": "gov8",
      "title": "Insurance Services",
      "desc": "PMJJBY, PMSBY & other govt schemes",
      "price": 100,
      "icon": "fa-shield-alt",
      "category": "govt"
    }
  ],
  "bills": [
    {
      "id": "bil1",
      "title": "Electricity Bill Payment",
      "desc": "Pay electricity bill online",
      "price": 30,
      "icon": "fa-bolt",
      "category": "bills"
    },
    {
      "id": "bil2",
      "title": "Water Bill Payment",
      "desc": "Pay water/municipality bills",
      "price": 30,
      "icon": "fa-tint",
      "category": "bills"
    },
    {
      "id": "bil3",
      "title": "Gas Booking",
      "desc": "Book LPG cylinder online",
      "price": 30,
      "icon": "fa-fire",
      "category": "bills"
    },
    {
      "id": "bil4",
      "title": "Mobile Recharge",
      "desc": "Prepaid & postpaid recharge",
      "price": 20,
      "icon": "fa-mobile",
      "category": "bills"
    }
  ],
  "travel": [
    {
      "id": "trv1",
      "title": "Railway Ticket Booking",
      "desc": "Book IRCTC train tickets",
      "price": 50,
      "icon": "fa-train",
      "category": "travel"
    },
    {
      "id": "trv2",
      "title": "Bus Ticket Booking",
      "desc": "Book state & private bus tickets",
      "price": 40,
      "icon": "fa-bus",
      "category": "travel"
    },
    {
      "id": "trv3",
      "title": "Banking Services",
      "desc": "CSP banking & money transfer",
      "price": 30,
      "icon": "fa-university",
      "category": "travel"
    }
  ],
  "forms": [
    {
      "id": "frm1",
      "title": "Exam Form Filling",
      "desc": "SSC, Railway, Police & other exams",
      "price": 100,
      "icon": "fa-file-signature",
      "category": "forms"
    },
    {
      "id": "frm2",
      "title": "Scholarship Form",
      "desc": "State & central scholarship forms",
      "price": 100,
      "icon": "fa-graduation-cap",
      "category": "forms"
    },
    {
      "id": "frm3",
      "title": "Job Application Form",
      "desc": "Govt & private job applications",
      "price": 100,
      "icon": "fa-briefcase",
      "category": "forms"
    },
    {
      "id": "frm4",
      "title": "Online Admission Forms",
      "desc": "School, college & university admission",
      "price": 100,
      "icon": "fa-school",
      "category": "forms"
    },
    {
      "id": "frm5",
      "title": "Government Forms",
      "desc": "All types of govt application forms",
      "price": 100,
      "icon": "fa-landmark",
      "category": "forms"
    }
  ]
};
