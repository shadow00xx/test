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

const preload = document.getElementById('preloader');
// preloader

function preloader() {
    setTimeout(() => {
        preload.remove()
    }, 1000);
}


function xb() {
    const categorys = document.querySelector('#prodects-categorys');
    let category = categorys.value
    // السيارات
    if (category === 'Vehicles') {
        prodectsForm.innerHTML += ` 
        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="address" id="floatingInput" class="form-control p-0" required
            placeholder="العنوان ">
        <label for="floatingInput"> العنوان </label>
    </div>
    <input type="hidden" name="category" value="${category}" id="">

  <div class="form-floating mb-3">
  <input type="number" name="modal" minlength="3" maxlength="20" required class="form-control rounded-3"
      id="floatingInput" placeholder="الموديل">
  <label for="floatingInput"> الموديل </label>
  </div>
  <div class="form-floating mb-3">
  <input type="text" name="gas" minlength="3" maxlength="20" required class="form-control rounded-3"
      id="floatingInput" placeholder="نوع الوقود">
  <label for="floatingInput">نوع الوقود  </label>
  </div>

  <div class="form-floating mb-3">
  <select name="conditions" class="form-control">
  <option value="use">مستخدم</option>
  <option value="new">جديد</option>
  </select>
  </div>

  <div class="form-floating mb-3">
  <select name="owners" class="form-control">
  <option selected>انت المالك ام وسيط</option>
  <option value="owner">المالك</option>
  <option value="middle">الوسيط</option>
</select>
  <input type="file" class="form-control" name="image" required>
  
                <button class="btn btn-outline-primary bt" type="submit">ارسال</button>
 
  

  `

        // الالكترونيات
    } if (category === 'Electronics') {
        prodectsForm.innerHTML += ` 
        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="address" id="floatingInput" class="form-control p-0" required
            placeholder="العنوان ">
        <label for="floatingInput"> العنوان </label>
    </div>

  <input type="hidden" name="category" value="${category}" id="">
  </div>
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

    }

    // العقارات
    if (category === 'Realestate') {
        prodectsForm.innerHTML += `
        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
    <select name="reson" class="form-control">
    <option selected>للبيع او للايجار </option>
    <option value="sale">للبيع</option>
    <option value="rent">الايجار</option>
  </select>
    </div>

    <div class="form-floating mb-3">
    <select name="owners" class="form-control">
    <option selected>انت المالك ام وسيط</option>
    <option value="owner">المالك</option>
    <option value="middle">الوسيط</option>
  </select>
    </div>

    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="location" id="floatingInput" class="form-control p-0" required
            placeholder="الموقع ">
        <label for="floatingInput"> الموقع </label>
    </div>

  <input type="hidden" name="category" value="${category}" id="">
  </div>
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>


`
    }
    if (category === 'Fashions') {
        prodectsForm.innerHTML += ` 

        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="address" id="floatingInput" class="form-control p-0" required
            placeholder="العنوان ">
        <label for="floatingInput"> العنوان </label>
    </div>

  <input type="hidden" name="category" value="${category}" id="">
  </div>
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>


  `

    } if (category === 'Makup') {
        prodectsForm.innerHTML += `
  
        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="address" id="floatingInput" class="form-control p-0" required
            placeholder="العنوان ">
        <label for="floatingInput"> العنوان </label>
    </div>

  <input type="hidden" name="category" value="${category}" id="">
  </div>
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>


  `

    } if (category === 'ForKides') {
        prodectsForm.innerHTML += ` 
        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="address" id="floatingInput" class="form-control p-0" required
            placeholder="العنوان ">
        <label for="floatingInput"> العنوان </label>
    </div>

  <input type="hidden" name="category" value="${category}" id="">
  </div>
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>


  `

    } if (category === 'Foods') {
        prodectsForm.innerHTML += ` 
        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="address" id="floatingInput" class="form-control p-0" required
            placeholder="العنوان ">
        <label for="floatingInput"> العنوان </label>
    </div>

  <input type="hidden" name="category" value="${category}" id="">
  </div>
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>


  `

    } if (category === 'Others') {
        prodectsForm.innerHTML += `
        <div class="form-floating mb-3">
        <input type="text" name="name" minlength="3" maxlength="20" required class="form-control rounded-3"
            id="floatingInput" placeholder="اسم المنتج">
        <label for="floatingInput">ادخل اسم المنتج</label>
    </div>
    <div class="form-floating mb-3">
        <textarea type="text" name="body" minlength="10" required class="form-control rounded-3"
            id="floatingInput" placeholder="وصف المنتج"></textarea>
        <label for="floatingInput">ادخل وصف للمنتج</label>
    </div>
    <div class="form-floating mb-3">
        <input type="number" name="prise" id="floatingInput" class="form-control p-0" required
            placeholder="السعر ">
        <label for="floatingInput"> السعر </label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" name="phone" id="floatingInput" class="form-control p-0" required
            placeholder="رقم الهاتف للتواصل ">
        <label for="floatingInput"> رقم الهاتف للتواصل </label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" name="address" id="floatingInput" class="form-control p-0" required
            placeholder="العنوان ">
        <label for="floatingInput"> العنوان </label>
    </div>

  <input type="hidden" name="category" value="${category}" id="">
  </div>
  <div class="mb-3">
  <input type="file" class="form-control" name="image" required>
</div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `


    } else {
        prodectsForm.innerHTML += 'اختر نوع من فضلك'
    }
}








