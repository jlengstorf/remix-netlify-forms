export default function Index() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    // Netlify will accept form submissions to any valid URL
    // by submitting to a static file we skip Remix's POST catcher
    fetch('/favicon.ico', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        window.location.href = '/thanks/';
      })
      .catch((error) => alert(error));
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Form Test</h1>
      <form
        method="post"
        name="Test Form"
        data-netlify="true"
        action="/thanks/"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Test Form" type="hidden" />

        <label>
          Name
          <input name="name" type="text" />
        </label>

        <label>
          Email
          <input name="email" type="email" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
