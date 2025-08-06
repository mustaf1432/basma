document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const link = this.link.value;
  const quantity = this.quantity.value;
  const service = this.service.value;

  alert("تم إرسال طلبك:\n" +
        "الرابط: " + link + "\n" +
        "العدد: " + quantity + "\n" +
        "الخدمة رقم: " + service + "\n" +
        "سيتم تنفيذ الطلب باستخدام Peakerr لاحقًا.");
});
