export function Footer() {
    return (
      <footer className="mt-20 border-t border-neutral-200">
        <div className="max-w-screen-md mx-auto px-5 py-10 text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <img src="/images/profile.jpg" alt="profile" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">店主 / Mizuno</p>
              <p>浅煎りが好き。実験好き。日々コーヒーの表現を探求中。</p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="https://instagram.com/your_instagram"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >Instagram</a>
          </div>
          <p className="mt-6 text-xs">© 2025 Coffee Stand 305</p>
        </div>
      </footer>
    );
  }