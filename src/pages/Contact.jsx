import "./Contact.scss"

export const Contact = () => {

  return (
    <>
      <div class="contact">
        <div class="contact__container">
          <h3>お問い合わせ</h3>
          <div class="contact__mail">
            <p><a class="contact__mail--address" href="mailto:contact@takeshihatae.com">contact@takeshihatae.com</a>にご連絡</p>
            {/* <p class="contact__mail--or">または</p> */}
          </div>
        </div>
      </div>
    </>
  )
}
