export default function Index() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        name: data.get('name'),
        email: data.get('email'),
      }),
    })
      .then(() => navigate('/thanks/'))
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
