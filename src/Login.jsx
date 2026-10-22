


 function Login() {
  return (
    <div className="login-page id=Log">
      <section className="brand-section">
        <h1>Good Coffee<br />Brighter Days ♡</h1>
        <div className="brand-line"></div>
        <p>Brewing happiness<br />one cup at a time.</p>
      </section>

      <section className="login-card">
        <div className="coffee-logo">☕</div>

        <h2 className="brand-name">Brew & Bliss</h2>
        <p className="tagline">COFFEE · PEOPLE · GOOD VIBES</p>

        <h1 className="welcome">Welcome Back!</h1>
        <p className="subtitle">
          Log in to continue your coffee journey.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-box">
            <span>✉</span>
            <input
              type="email"
              placeholder="Email address"
              required
            />
          </div>

          <div className="input-box">
            <span>♙</span>
            <input
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#forgot">Forgot password?</a>
          </div>

          <button className="login-btn" type="submit">
            Log In <span>→</span>
          </button>
        </form>

        <div className="divider">
          <span></span> or <span></span>
        </div>

        <div className="social-buttons">
          <button type="button">G</button>
          <button type="button">●</button>
          <button type="button">f</button>
        </div>

        <p className="signup">
          Don't have an account?
          <a href="#signup">Sign Up</a>
        </p>
      </section>
    </div>
  );
}
export default Login;
