const body = document.querySelector('body')
const editBtn = document.getElementById('edit-btn')
const editInfo = document.getElementById('edit-info')


// editBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   editBtn.style.display = 'none'

//   const div = `
//   <div class="form-floating mb-3">
//     <input type="text" name="name" minlength="4" required class="form-control rounded-3" id="floatingInput"
//       placeholder="name@example.com">
//     <label for="floatingInput">name</label>
//   </div>

//   <div class="form-floating mb-3">
//     <input type="text" name="username" minlength="3" required class="form-control rounded-3" id="floatingInput"
//       placeholder="name@example.com">
//     <label for="floatingInput">username</label>
//   </div>

//   <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">حفظ</button>

// `
//   editInfo.innerHTML += div

// })




/**
 * Back to top button
 */

// const backtotop = document.querySelector('.back-to-top')

// if (backtotop) {
//   const toggleBacktotop = () => {
//     if (window.scrollY > 100) {
//       backtotop.classList.add('active')
//     } else {
//       backtotop.classList.remove('active')
//     }
//   }
//   window.addEventListener('load', toggleBacktotop())
//   window.addEventListener('scroll', toggleBacktotop())

// }


// addprodects

const prodectsForm = document.getElementById("prodects-form")
const out = document.querySelector('.out');
const btnSelectCat = document.getElementById('cat-select');

// btnSelectCat.addEventListener('click', xb)




function xb() {
    const categorys = document.querySelector('#prodects-categorys');
    let category = categorys.value
    // السيارات
    if (category === 'Vehicles') {
        prodectsForm.innerHTML += ` 
     <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> اسم العربة</span>
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم العربة" aria-describedby="basic-addon1">
      </div>
    
      <div class="input-group mb-3">
        <span class="input-group-text" >وصف العربة </span>
        <textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
      </div>
    
      <div class="input-group mb-3">
        <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
        <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
        <span class="input-group-text">$</span>
      </div>
    
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
        <input type="number" maxlength="10" name="phone" required class="form-control" 
         aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
      </div>
    
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> العنوان </span>
        <input type="text" name="address" minlength="3" maxlength="20" required class="form-control" 
         aria-label=" العنوان" aria-describedby="basic-addon1">
      </div>
    
    <input type="hidden" name="category" value="${category}" id="">

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> الموديل </span>
    <input type="number" name="modal" minlength="3" maxlength="7" required class="form-control"  aria-label="الموديل " aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"> نوع الوقود  </span>
  <input type="text" name="gas" minlength="3" maxlength="10" required class="form-control"  aria-label="نوع الوقود  " aria-describedby="basic-addon1">
</div>

  <div class="mb-3">
          <select class="form-select form-select-md mb-3" name="conditions" aria-label=".form-select-lg مثال">
            <option selected> حالة العربة الحالية</option>
            <option value="use">مستخدم</option>
            <option value="new">جديد</option>
          </select>
    </div>

<div class="mb-3">
    <select class="form-select form-select-md mb-3" name="owners" aria-label=".form-select-lg مثال">
    <option selected>انت المالك ام وسيط</option>
    <option value="owner">المالك</option>
    <option value="middle">الوسيط</option>
    </select>
</div>

<div class="mb-3">
<input type="file" class="form-control" name="image" required>
</div>
  
 <button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>
 
  `
  btnSelectCat.style.display= 'none'
  categorys.style.display= 'none'
        // الالكترونيات
    } if (category === 'Electronics') {
        prodectsForm.innerHTML += `
      
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> اسم السلعة</span>
    <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم السلعة" aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" >وصف السلعة </span>
    <textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
    <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
    <span class="input-group-text">$</span>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
    <input type="number" maxlength="10" name="phone" required class="form-control" 
     aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> العنوان </span>
    <input type="text" name="address" minlength="3" maxlength="20" required class="form-control" 
     aria-label=" العنوان" aria-describedby="basic-addon1">
  </div>

  <input type="hidden" name="category" value="${category}" id="">
 
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>

  `
  btnSelectCat.style.display= 'none'
  categorys.style.display= 'none'

    }

    // العقارات
    if (category === 'Realestate') {
        prodectsForm.innerHTML += `
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> اسم السلعة</span>
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم السلعة" aria-describedby="basic-addon1">
    </div>

 <div class="mb-3">
    <select class="form-select form-select-md mb-3"  name="reson" aria-label=".form-select-lg مثال">
    <option selected>للبيع او للايجار </option>
    <option value="sale">للبيع</option>
    <option value="rent">الايجار</option>
    </select>
</div>

<div class="mb-3">
    <select class="form-select form-select-md mb-3" name="owners" aria-label=".form-select-lg مثال">
    <option selected>انت المالك ام وسيط</option>
    <option value="owner">المالك</option>
    <option value="middle">الوسيط</option>
    </select>
</div>


<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1"> الموقع </span>
<input type="text" name="location" minlength="3" required class="form-control"  aria-label="الموقع " aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
  <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
  <span class="input-group-text">$</span>
</div>

<div class="input-group mb-3">
<span class="input-group-text" > المواصفات </span>
<textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
</div>

  


    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
    <input type="number" maxlength="10" name="phone" required class="form-control" 
     aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
  </div>


  <input type="hidden" name="category" value="${category}" id="">
  
<div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
<button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>

`
btnSelectCat.style.display= 'none'
categorys.style.display= 'none'
    }
    if (category === 'Fashions') {
        prodectsForm.innerHTML += `
      
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> اسم السلعة</span>
    <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم السلعة" aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" >وصف السلعة </span>
    <textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
    <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
    <span class="input-group-text">$</span>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
    <input type="number" maxlength="10" name="phone" required class="form-control" 
     aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> العنوان </span>
    <input type="text" name="address" minlength="3" maxlength="20" required class="form-control" 
     aria-label=" العنوان" aria-describedby="basic-addon1">
  </div>

  <input type="hidden" name="category" value="${category}" id="">
  
<div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
 <button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>

  `
  btnSelectCat.style.display= 'none'
  categorys.style.display= 'none'

    } if (category === 'Makup') {
        prodectsForm.innerHTML += `
      
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> اسم السلعة</span>
    <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم السلعة" aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" >وصف السلعة </span>
    <textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
    <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
    <span class="input-group-text">$</span>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
    <input type="number" maxlength="10" name="phone" required class="form-control" 
     aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> العنوان </span>
    <input type="text" name="address" minlength="3" maxlength="20" required class="form-control" 
     aria-label=" العنوان" aria-describedby="basic-addon1">
  </div>

  <input type="hidden" name="category" value="${category}" id="">

<div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
 <button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>

  `
  btnSelectCat.style.display= 'none'
  categorys.style.display= 'none'

    } if (category === 'ForKides') {
        prodectsForm.innerHTML += `
      
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> اسم السلعة</span>
    <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم السلعة" aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" >وصف السلعة </span>
    <textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
    <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
    <span class="input-group-text">$</span>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
    <input type="number" maxlength="10" name="phone" required class="form-control" 
     aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> العنوان </span>
    <input type="text" name="address" minlength="3" maxlength="20" required class="form-control" 
     aria-label=" العنوان" aria-describedby="basic-addon1">
  </div>

  <input type="hidden" name="category" value="${category}" id="">

<div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
 <button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>

  `
  btnSelectCat.style.display= 'none'
  categorys.style.display= 'none'

    } if (category === 'Foods') {
        prodectsForm.innerHTML += `
      
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"> اسم السلعة</span>
          <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم السلعة" aria-describedby="basic-addon1">
        </div>
      
        <div class="input-group mb-3">
          <span class="input-group-text" >وصف السلعة </span>
          <textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
        </div>
      
        <div class="input-group mb-3">
          <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
          <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
          <span class="input-group-text">$</span>
        </div>
      
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
          <input type="number" maxlength="10" name="phone" required class="form-control" 
           aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
        </div>
      
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"> العنوان </span>
          <input type="text" name="address" minlength="3" maxlength="20" required class="form-control" 
           aria-label=" العنوان" aria-describedby="basic-addon1">
        </div>
      
        <input type="hidden" name="category" value="${category}" id="">
   
    <div class="mb-3">
        <input type="file" class="form-control" name="image" required>
    </div>
       <button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>
      
        `
        btnSelectCat.style.display= 'none'
        categorys.style.display= 'none'

    } if (category === 'Others') {
        prodectsForm.innerHTML += `
      
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> اسم السلعة</span>
    <input type="text" name="name" minlength="3" maxlength="20" required class="form-control"  aria-label="اسم السلعة" aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" >وصف السلعة </span>
    <textarea class="form-control" name="body" minlength="10" aria-label="مع textarea"></textarea>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text"><bdo>المبلغ المطلوب</bdo></span>
    <input type="number"  name="prise" class="form-control" aria-label="المبلغ (لأقرب دولار)" maxlength="10" required>
    <span class="input-group-text">$</span>
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> رقم الهاتف للتواصل  </span>
    <input type="number" maxlength="10" name="phone" required class="form-control" 
     aria-label=" رقم الهاتف للتواصل " aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"> العنوان </span>
    <input type="text" name="address" minlength="3" maxlength="20" required class="form-control" 
     aria-label=" العنوان" aria-describedby="basic-addon1">
  </div>

  <input type="hidden" name="category" value="${category}" id="">
 
<div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
 <button class="btn btn-primary w-100 mb-3" type="submit">ارسال</button>

  `
  btnSelectCat.style.display= 'none'
  categorys.style.display= 'none'
    }
}








