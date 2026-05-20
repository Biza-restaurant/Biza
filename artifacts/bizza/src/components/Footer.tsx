import logoPath from "@assets/598665214_17850248598606361_7817036976118675783_n_1779292460729.jpg";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bizarestaurant/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/%F0%9D%90%81%F0%9D%90%88%F0%9D%90%99%F0%9D%90%80-%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%AD%F0%9D%90%9A%F0%9D%90%AE%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%A7%F0%9D%90%AD-%F0%9D%90%81%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A4%F0%9D%90%AB%F0%9D%90%9A/61583445653294/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@biza.restaurant",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-primary/20 relative">
      <div className="container mx-auto px-6 text-center">
        <img src={logoPath} alt="BIZA Logo" className="w-20 h-20 mx-auto rounded-full border border-primary/30 mb-8" />

        <h2 className="font-serif text-3xl text-foreground mb-2">BIZA HISTOIRE D'OR</h2>
        <p className="text-primary/70 text-xs tracking-widest uppercase mb-6">Biza Restaurant | Biskra</p>

        <p className="text-muted-foreground font-light text-sm mb-2">
          🍽️ Cuisine raffinée &amp; saveurs uniques
        </p>
        <p className="text-muted-foreground font-light text-sm mb-6">
          🍸 Cocktails · Mocktails · Plats signature
        </p>

        <a
          href="https://maps.app.goo.gl/GsBJfNJqKckuRhyR9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          مقابل جامعة شتمة، بسكرة
        </a>

        <div className="mb-8">
          <a
            href="tel:0560701995"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            0560 70 19 95
          </a>
        </div>

        <div className="mb-10 max-w-xs mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className="text-primary text-xs uppercase tracking-widest">Horaires d'ouverture</span>
          </div>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            {[
              { day: "Mercredi", hours: "07:00 – 01:00" },
              { day: "Jeudi", hours: "07:00 – 01:00" },
              { day: "Vendredi", hours: "15:00 – 01:00" },
              { day: "Samedi", hours: "15:00 – 01:00" },
              { day: "Dimanche", hours: "07:00 – 01:00" },
              { day: "Lundi", hours: "07:00 – 01:00" },
              { day: "Mardi", hours: "07:00 – 01:00" },
            ].map(({ day, hours }) => (
              <div key={day} className="flex justify-between gap-6">
                <span className="font-light">{day}</span>
                <span className="text-foreground/70">{hours}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50 mt-3 italic">Les horaires peuvent être différents</p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="text-xs text-muted-foreground tracking-widest">
          © {new Date().getFullYear()} BIZA HISTOIRE D'OR. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
