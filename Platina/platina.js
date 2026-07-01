let passagiers = [
  {
    id: 163821,
    naam: "Devon Damopoli-i",
    saldo: 34,
    woonplaats: "Amsterdam",
    foto: "https://i.pravatar.cc/100?img=1"
  },
  {
    id: 145032,
    naam: "Sven Janssen",
    saldo: 18,
    woonplaats: "Maastricht",
    foto: "https://i.pravatar.cc/100?img=2"
  }
];

const route = ["Vertrekhalte", "Centrum", "Station", "Ziekenhuis", "Eindhalte"];
let huidigeStop = 0;

function toonPassagiers() {
  console.log("\n📋 Passagierslijst:");
  passagiers.forEach(p => {
    console.log(`  [${p.id}] ${p.naam} | Saldo: €${p.saldo} | ${p.woonplaats} | Foto: ${p.foto}`);
  });
}

function voegToe(id, naam, saldo, woonplaats, fotoNr) {
  passagiers.push({ id, naam, saldo, woonplaats, foto: `https://i.pravatar.cc/100?img=${fotoNr}` });
  console.log(`🚪 ${naam} stapt in.`);
}

function inchecken(id) {
  const passagier = passagiers.find(p => p.id === id);
  if (passagier.saldo < 1.50) {
    console.log(`🚨 ${passagier.naam} heeft onvoldoende saldo!`);
    return;
  }
  passagier.saldo -= 1.50;
  console.log(`🔔 ${passagier.naam} ingecheckt. Saldo: €${passagier.saldo}`);
}

function uitchecken(id) {
  const passagier = passagiers.find(p => p.id === id);
  passagier.saldo += 0.50;
  console.log(`🔕 ${passagier.naam} uitgecheckt. Saldo: €${passagier.saldo}`);
}

function verwijder(id) {
  const index = passagiers.findIndex(p => p.id === id);
  const verwijderde = passagiers.splice(index, 1)[0];
  console.log(`🗑️  OV-kaart van ${verwijderde.naam} opgezegd.`);
}

function rijdNaarVolgendeStop() {
  if (huidigeStop >= route.length - 1) {
    console.log("🏁 Bus is al op de eindhalte.");
    return;
  }
  huidigeStop++;
  console.log(`\n🚌 Bus rijdt naar: ${route[huidigeStop]}`);
  const routeWeergave = route.map((stop, i) => i === huidigeStop ? `[${stop}]` : stop).join(" → ");
  console.log(`   ${routeWeergave}`);
}

console.log("╔══════════════════════════════╗");
console.log("║   🚌 OV Simulatie - Platina  ║");
console.log("╚══════════════════════════════╝");
console.log(`\n🗺️  Route: ${route.join(" → ")}`);

toonPassagiers();

inchecken(163821);
inchecken(145032);

rijdNaarVolgendeStop();
rijdNaarVolgendeStop();

uitchecken(163821);

voegToe(300001, "Lisa de Vries", 3, "Rotterdam", 9);
inchecken(300001);

rijdNaarVolgendeStop();

verwijder(145032);

rijdNaarVolgendeStop();
rijdNaarVolgendeStop();

console.log("\n✅ Simulatie klaar!");
toonPassagiers();