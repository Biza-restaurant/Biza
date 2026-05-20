import logoPath from "@assets/598665214_17850248598606361_7817036976118675783_n_1779292460729.jpg";

export const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-primary/20 relative">
      <div className="container mx-auto px-6 text-center">
        <img src={logoPath} alt="BIZA Logo" className="w-20 h-20 mx-auto rounded-full border border-primary/30 mb-8" />
        
        <h2 className="font-serif text-3xl text-foreground mb-4">BIZA HISTOIRE D'OR</h2>
        <p className="text-muted-foreground font-light mb-8 max-w-sm mx-auto">
          12 Rue de la Paix<br/>
          75002 Paris, France
        </p>

        <div className="flex items-center justify-center gap-8 mb-12">
          {['Instagram', 'Twitter', 'Facebook'].map(social => (
            <a key={social} href="#" className="text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors">
              {social}
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
