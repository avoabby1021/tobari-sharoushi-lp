// FAQは<details>/<summary>のネイティブ機能で開閉（項目ごとに独立、JS不要）

// お問い合わせフォーム（送信先バックエンド未実装のため、入力チェックのみ行うデモ動作）
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // ハニーポット（入力があればボット判定し何もしない）
    const honeypot = form.querySelector('#website');
    if (honeypot && honeypot.value) {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    status.textContent = 'このフォームはデモ表示のみです。実際の送信処理は未接続です。';
  });
}
