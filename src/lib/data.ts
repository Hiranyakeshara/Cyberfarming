export type UserRole = "farmer" | "admin";

export const demoAccounts = [
  {
    role: "farmer" as UserRole,
    name: "Nimal Perera",
    email: "farmer@farmsec.demo",
    password: "farmer123",
  },
  {
    role: "admin" as UserRole,
    name: "Research Admin",
    email: "admin@farmsec.demo",
    password: "admin123",
  },
];

export const modules = [
  {
    slug: "fake-subsidy",
    title: "Fake subsidy messages",
    shortTitle: "Subsidy scams",
    category: "Government services",
    description: "Recognise fake grant notices, suspicious links and copied government pages.",
    duration: "6 min",
    difficulty: "Beginner",
    progress: 100,
    icon: "Landmark",
    risk: "High",
  },
  {
    slug: "mobile-payments",
    title: "Mobile payment confirmation",
    shortTitle: "Payment safety",
    category: "Banking and payments",
    description: "Protect OTPs, verify payment requests and stop rushed transfers.",
    duration: "8 min",
    difficulty: "Beginner",
    progress: 60,
    icon: "Smartphone",
    risk: "High",
  },
  {
    slug: "supplier-invoice",
    title: "Supplier invoice fraud",
    shortTitle: "Supplier fraud",
    category: "Supplier communication",
    description: "Confirm bank-detail changes and identify impersonated suppliers.",
    duration: "7 min",
    difficulty: "Intermediate",
    progress: 35,
    icon: "ReceiptText",
    risk: "Medium",
  },
  {
    slug: "marketplace-buyers",
    title: "Marketplace buyer scams",
    shortTitle: "Buyer scams",
    category: "Online marketplaces",
    description: "Check buyer credibility and avoid false purchase orders or advance-fee scams.",
    duration: "7 min",
    difficulty: "Beginner",
    progress: 0,
    icon: "ShoppingBasket",
    risk: "High",
  },
  {
    slug: "device-passwords",
    title: "Farm device password safety",
    shortTitle: "Device security",
    category: "Connected devices",
    description: "Use unique passwords and secure shared phones and farm applications.",
    duration: "5 min",
    difficulty: "Beginner",
    progress: 0,
    icon: "LockKeyhole",
    risk: "Medium",
  },
  {
    slug: "whatsapp-takeover",
    title: "WhatsApp account takeover",
    shortTitle: "Account takeover",
    category: "Messaging safety",
    description: "Recognise verification-code tricks and recover a compromised account safely.",
    duration: "6 min",
    difficulty: "Intermediate",
    progress: 0,
    icon: "MessageCircleWarning",
    risk: "Medium",
  },
];

export const simulationMessages = [
  {
    id: 1,
    sender: "Agri Grant Alert",
    subject: "Final notice: claim your seasonal grant today",
    preview: "Your grant expires in 2 hours. Confirm bank details now.",
    suspicious: true,
    signs: ["Urgent deadline", "Unknown shortened link", "Requests banking details", "Sender is not an official domain"],
  },
  {
    id: 2,
    sender: "Perera Farm Supplies",
    subject: "Delivery confirmed for Thursday",
    preview: "Your seed order will arrive between 9.00 and 11.00 a.m.",
    suspicious: false,
    signs: ["Expected order", "Known supplier", "No request for credentials", "No unexpected payment change"],
  },
  {
    id: 3,
    sender: "Subsidy Office",
    subject: "Account validation required",
    preview: "Open the attached form and enter your portal password.",
    suspicious: true,
    signs: ["Unexpected attachment", "Requests a password", "Generic sender name", "Pressure to act immediately"],
  },
  {
    id: 4,
    sender: "Cooperative Notice",
    subject: "Monthly collection schedule",
    preview: "The June collection timetable is available on the cooperative portal.",
    suspicious: false,
    signs: ["Routine information", "Known organisation", "Official portal reference", "No sensitive-data request"],
  },
];

export const campaigns = [
  { id: "CMP-104", name: "Subsidy link practice", group: "Vegetable farmers", template: "Fake grant SMS", status: "Running", sent: 48, opened: 36, clicked: 9, reported: 18 },
  { id: "CMP-103", name: "Supplier invoice check", group: "Cooperative staff", template: "Invoice update", status: "Completed", sent: 32, opened: 29, clicked: 4, reported: 20 },
  { id: "CMP-102", name: "Marketplace buyer alert", group: "Rice farmers", template: "Urgent buyer", status: "Draft", sent: 0, opened: 0, clicked: 0, reported: 0 },
  { id: "CMP-101", name: "Portal password safety", group: "Mixed pilot group", template: "Login page", status: "Completed", sent: 40, opened: 33, clicked: 12, reported: 14 },
];

export const farmerRows = [
  { name: "Nimal Perera", role: "Farmer", district: "Kurunegala", modules: "4/6", score: "78%", status: "Active" },
  { name: "Kumari Silva", role: "Farm manager", district: "Anuradhapura", modules: "6/6", score: "91%", status: "Completed" },
  { name: "S. Tharshan", role: "Farmer", district: "Jaffna", modules: "3/6", score: "72%", status: "Active" },
  { name: "Ruwan Jayasinghe", role: "Cooperative staff", district: "Kandy", modules: "5/6", score: "84%", status: "Active" },
  { name: "Fathima Niyas", role: "Farmer", district: "Ampara", modules: "2/6", score: "66%", status: "Needs support" },
];

export const reportRows = [
  { id: "RPT-221", source: "WhatsApp", sender: "+94 77 123 8890", category: "Fake subsidy", date: "22 Jun 2026", status: "Under review" },
  { id: "RPT-220", source: "SMS", sender: "PAY-ALERT", category: "OTP scam", date: "21 Jun 2026", status: "Confirmed scam" },
  { id: "RPT-219", source: "Email", sender: "supplier-update@fastmail.example", category: "Supplier fraud", date: "20 Jun 2026", status: "Confirmed scam" },
  { id: "RPT-218", source: "WhatsApp", sender: "Known buyer", category: "Marketplace", date: "19 Jun 2026", status: "Safe" },
];
