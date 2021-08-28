import "./Contact.scss"

export const Contact = () => {

  return (
    <>
      <div class="contact">
        <div class="contact__container">
          <h3>お問い合わせ</h3>
          <div class="contact__mail">
            <p><a class="contact__mail--address" href="mailto:contact@takeshihatae.com">contact@takeshihatae.com</a>にご連絡</p>
            <p class="contact__mail--or">または</p>
          </div>
          <div class="contact__form">
              <form  name="contact" method="post" action="" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <dl>
                <dt><label for="name">お名前</label></dt>
                <dd><input type="text" id="name" name="name" required /></dd>
                <dt><label for="email">メールアドレス</label></dt>
                <dd><input type="email" id="email" name="email" required /></dd>
                <dt><label>お問い合わせの種類</label></dt>
                <dd class="selectbox">
                  <select name="item">
                    <option value="">お問い合わせの種類をご選択ください</option>
                    <option value="ご質問">ご質問</option>
                    <option value="レッスン">レッスン</option>
                    <option value="演奏依頼">演奏依頼</option>
                    <option value="その他">その他</option>
                  </select>
                </dd>
                <dt><label>メッセージ</label></dt>
                <dd><textarea name="message" cols="40" rows="10" required></textarea></dd>
              </dl>
              <div class="btn"><button type="submit" class="submit-btn">送信</button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
