export function Footer() {
    return (
      <footer className="mt-20 border-t border-neutral-200">
        <div className="max-w-screen-md mx-auto px-5 py-10 text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <img src="/images/sososo_icon.jpg" alt="profile" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="main-text">代表 / sososo</p>
              <p>フルーティーなコーヒーに魅了され、美味しさを日々追求しています。Instagramでコーヒーに振り回される日常を覗けます。</p>
              <a 
                href="https://instagram.com/sososo_coffee"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm text-url underline decoration-url/40 underline-offset-4 group-hover:decoration-url"
              >
                Instagramで見る
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs">Coffee Stand 305</p>
        </div>
      </footer>
    );
  }