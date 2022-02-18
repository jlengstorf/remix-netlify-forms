export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Form Test</h1>
      <form
        method="post"
        name="Test Form"
        data-netlify="true"
        action="/thanks/"
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
