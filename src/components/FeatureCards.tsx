const features = [
  {
    number: "01",
    title: "Track",
    body: "Follow your parcel using its unique STL tracking number.",
  },
  {
    number: "02",
    title: "Trace",
    body: "See the recorded journey and latest shipment status.",
  },
  {
    number: "03",
    title: "Deliver",
    body: "Clear shipment visibility from origin through destination.",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li key={f.number} className="cath-card cath-card--raised cath-card--interactive p-8">
            <span className="cath-card__number">{f.number}</span>
            <h3 className="mt-6 text-4xl font-medium tracking-tight text-[#e5decc]" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              {f.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#b9b2a4]">{f.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}