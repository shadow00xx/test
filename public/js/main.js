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

btnSelectCat.addEventListener('click', xb)



function xb() {
  const catogerys = document.querySelector('#prodects-catogery');
  let catogery = catogerys.value
  if (catogery === 'cars') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
      id="floatingInput" placeholder="الاسم">
  <label for="floatingInput">ادخل اسم المنتج</label>
  </div>
  <div class="form-floating mb-3">
  <input type="number" name="modal" minlength="3" maxlength="20" required class="form-control rounded-3"
      id="floatingInput" placeholder="الاسم">
  <label for="floatingInput"> الموديال </label>
  </div>
  <div class="form-floating mb-3">
  <input type="text" name="gas" minlength="3" maxlength="20" required class="form-control rounded-3"
      id="floatingInput" placeholder="الاسم">
  <label for="floatingInput">نوع الوقود  </label>
  </div>
  <div class="form-floating mb-3">
  <input type="text" name="conditions" minlength="3" maxlength="20" required class="form-control rounded-3"
      id="floatingInput" placeholder="جديد ام مستحدم">
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } if (catogery === 'eloctronic') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } if (catogery === 'realstate') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } if (catogery === 'fashon') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } if (catogery === 'makeup') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } if (catogery === 'kids') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } if (catogery === 'food') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } if (catogery === 'others') {
    prodectsForm.innerHTML += ` <div class="form-floating mb-3">
  <input type="text" name="title" minlength="3" maxlength="20" required class="form-control rounded-3"
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
  <input type="hidden" name="catogery" value="${catogery}" id="">
  </div>
  <div class="mb-3">
  <label class="form-label" for="disabledCustomFile">رفع معطل</label>
  <input type="file" class="form-control" id="disabledCustomFile" name="image" required>
  </div>
  <button class="btn btn-outline-primary bt" type="submit">ارسال</button>

  `

  } else {
    prodectsForm.innerHTML += 'اختر نوع من فضلك'
  }
}









