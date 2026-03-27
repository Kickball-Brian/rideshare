let selectedCompany = '';

function selectCompany(el) {
  document.querySelectorAll('.company-tile').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
  selectedCompany = el.getAttribute('data-value');
  document.getElementById('companyValue').value = selectedCompany;
  document.getElementById('company-error').style.display = 'none';
}

document.getElementById('phone').addEventListener('input', function(e) {
  let v = e.target.value.replace(/\D/g, '').substring(0, 10);
  if (v.length >= 6) v = '(' + v.substring(0,3) + ') ' + v.substring(3,6) + '-' + v.substring(6);
  else if (v.length >= 3) v = '(' + v.substring(0,3) + ') ' + v.substring(3);
  e.target.value = v;
});

['full-name','phone','email'].forEach(id => {
  document.getElementById(id).addEventListener('input', function() {
    const fieldId = id === 'full-name' ? 'field-name' : id === 'phone' ? 'field-phone' : 'field-email';
    document.getElementById(fieldId).classList.remove('error');
  });
});

document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  if (!selectedCompany) {
    document.getElementById('company-error').style.display = 'block';
    valid = false;
  }

  const name = document.getElementById('full-name').value.trim();
  if (!name || name.length < 2) {
    document.getElementById('field-name').classList.add('error');
    valid = false;
  }

  const phone = document.getElementById('phone').value.replace(/\D/g,'');
  if (phone.length < 10) {
    document.getElementById('field-phone').classList.add('error');
    valid = false;
  }

  const email = document.getElementById('email').value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('field-email').classList.add('error');
    valid = false;
  }

  if (!valid) return;

  const payload = { company: selectedCompany, name, phone, email };
  console.log('Lead submitted:', payload);

  document.getElementById('leadForm').style.display = 'none';
  document.getElementById('successMsg').classList.add('show');
});
