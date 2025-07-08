
document.addEventListener("DOMContentLoaded", function () {
  const branding = {"id":"684a6ff0be761974ae478e8e","name":"Demo Site","description":"","logo":"https://demo-shp.qhtpl.com/cpm-api/upload/v1/fileDownloads?fileUrl=hdfs://sdp-hdfs-namenode.hdfs.svc.cluster.local:9820/jars/1749708737749_cropped_image.png","companyName":"Lorem Ipsum Technologies","logoAlignment":"left","headerFontFamily":"Arial","headerFontSize":"Normal","headerFontColor":"#A5A7C7","headerFontStyle":null,"primaryButtonLabel":"Submit","primaryFontSize":null,"primaryFontStyle":null,"primaryFontColor":"#FFFFFF","primaryButtonColor":null,"secondaryButtonLabel":"Cancel","secondaryFontSize":null,"secondaryFontStyle":null,"secondaryFontColor":"#606190","footerAlignment":"right","status":"PUBLISHED","createdOn":1749708784521,"assignTo":0,"brandingTranslation":[{"language":"English","languageCode":"en","companyName":"Lorem Ipsum Technologies","primaryButtonLabel":"Submit","secondaryButtonLabel":"Cancel"},{"language":"Hindi","languageCode":"hi","companyName":"लोरेम इप्सम टेक्नोलॉजीज","primaryButtonLabel":"जमा करना","secondaryButtonLabel":"रद्द करना"},{"language":"Marathi","languageCode":"mr","companyName":"लोरेम इप्सम टेक्नॉलॉजीज","primaryButtonLabel":"सबमिट करा","secondaryButtonLabel":"रद्द करा"}],"primaryButtonbgColor":"#606190","primaryButtonborderColor":"#606190","secondaryButtonBgColor":"#ffff","secondaryButtonBorderColor":"#606190"};
  const brandingTranslation = branding.brandingTranslation || [];
  const permissions = [
    {
      id: "684a70d3be761974ae478e9d",
      text: "<p>Would you like to receive email updates from us?</p>",
      templateId: "684a6a8bbe761974ae478e56",
      purposeId: "6846a058be761974ae478cb3",
      defineOptions: true,
      elementType: "RADIOBUTTON",
      mandatory: true,
      allowMultipleSelection: false,
      options: [
        "Yes, send me all updates, promotional emails and newsletters",
        "Only send me important updates (e.g., account notices)",
        "No, I do not want to receive any emails",
      ],
      permissionTranslation: [
        {
          language: "English",
          languageCode: "en",
          text: "<p>Would you like to receive email updates from us?</p>",
          options: [
            "Yes, send me all updates, promotional emails and newsletters",
            "Only send me important updates (e.g., account notices)",
            "No, I do not want to receive any emails",
          ],
        },
        {
          language: "Hindi",
          languageCode: "hi",
          text: "क्या आप हमसे ईमेल अपडेट प्राप्त करना चाहेंगे?",
          options: [
            "हां, मुझे सभी अपडेट, प्रचार ईमेल और समाचार पत्र भेजें",
            "मुझे केवल महत्वपूर्ण अपडेट भेजें (जैसे, खाता सूचनाएँ)",
            "नहीं, मैं कोई ईमेल प्राप्त नहीं करना चाहता",
          ],
        },
        {
          language: "Marathi",
          languageCode: "mr",
          text: "तुम्हाला आमच्याकडून ईमेल अपडेट्स मिळवायचे आहेत का?",
          options: [
            "हो, मला सर्व अपडेट्स, प्रमोशनल ईमेल आणि न्यूजलेटर पाठवा.",
            "मला फक्त महत्त्वाचे अपडेट पाठवा (उदा., खाते सूचना)",
            "नाही, मला कोणतेही ईमेल मिळवायचे नाहीत.",
          ],
        },
      ],
    },
    {
      id: "684a70d3be761974ae478e9e",
      text: "<p>Do you agree to receive personalised ads based on your data?</p>",
      templateId: "684a6a8bbe761974ae478e56",
      purposeId: "6846a058be761974ae478cb3",
      defineOptions: true,
      elementType: "RADIOBUTTON",
      mandatory: true,
      allowMultipleSelection: false,
      options: [
        "Yes, personalize my ads and content",
        "Only use limited data for non personalized ads",
        "No, do not use my data for advertising",
      ],
      permissionTranslation: [
        {
          language: "English",
          languageCode: "en",
          text: "<p>Do you agree to receive personalised ads based on your data?</p>",
          options: [
            "Yes, personalize my ads and content",
            "Only use limited data for non personalized ads",
            "No, do not use my data for advertising",
          ],
        },
        {
          language: "Hindi",
          languageCode: "hi",
          text: "क्या आप अपने डेटा के आधार पर वैयक्तिकृत विज्ञापन प्राप्त करने के लिए सहमत हैं?",
          options: [
            "हां, मेरे विज्ञापनों और सामग्री को वैयक्तिकृत करें",
            "गैर-वैयक्तिकृत विज्ञापनों के लिए केवल सीमित डेटा का उपयोग करें",
            "नहीं, विज्ञापन के लिए मेरे डेटा का उपयोग न करें",
          ],
        },
        {
          language: "Marathi",
          languageCode: "mr",
          text: "तुमच्या डेटावर आधारित वैयक्तिकृत जाहिराती प्राप्त करण्यास तुम्ही सहमत आहात का?",
          options: [
            "हो, माझ्या जाहिराती आणि सामग्री वैयक्तिकृत करा",
            "वैयक्तिकृत नसलेल्या जाहिरातींसाठी मर्यादित डेटा वापरा",
            "नाही, माझा डेटा जाहिरातीसाठी वापरू नका.",
          ],
        },
      ],
    },
    {
      id: "684a70d3be761974ae478e9f",
      text: "<p>What level of data collection are you comfortable with?</p>",
      templateId: "684a6a8bbe761974ae478e56",
      purposeId: "6846a058be761974ae478cb3",
      defineOptions: true,
      elementType: "RADIOBUTTON",
      mandatory: true,
      allowMultipleSelection: false,
      options: [
        "Full consent – collect and store all relevant data",
        "Limited consent – only store what's needed for requested service",
        "No consent – do not store my data beyond this session",
      ],
      permissionTranslation: [
        {
          language: "English",
          languageCode: "en",
          text: "<p>What level of data collection are you comfortable with?</p>",
          options: [
            "Full consent – collect and store all relevant data",
            "Limited consent – only store what's needed for requested service",
            "No consent – do not store my data beyond this session",
          ],
        },
        {
          language: "Hindi",
          languageCode: "hi",
          text: "डेटा संग्रहण के किस स्तर से आप सहज हैं?",
          options: [
            "पूर्ण सहमति - सभी प्रासंगिक डेटा एकत्रित और संग्रहीत करें",
            "सीमित सहमति - केवल वही संग्रहित करें जो अनुरोधित सेवा के लिए आवश्यक है",
            "कोई सहमति नहीं - इस सत्र से आगे मेरा डेटा संग्रहीत न करें",
          ],
        },
        {
          language: "Marathi",
          languageCode: "mr",
          text: "डेटा संकलनाच्या कोणत्या पातळीबद्दल तुम्हाला समाधान वाटते?",
          options: [
            "पूर्ण संमती - सर्व संबंधित डेटा गोळा आणि संग्रहित करा.",
            "मर्यादित संमती - विनंती केलेल्या सेवेसाठी आवश्यक असलेलेच साठवा.",
            "संमती नाही - या सत्राच्या पलीकडे माझा डेटा साठवू नका.",
          ],
        },
      ],
    },
    {
      id: "684a70d3be761974ae478ea0",
      text: "<p><strong></strong>Can we share your data with our trusted partners?</p>",
      templateId: "684a6a8bbe761974ae478e56",
      purposeId: "6846a058be761974ae478cb3",
      defineOptions: true,
      elementType: "RADIOBUTTON",
      mandatory: true,
      allowMultipleSelection: false,
      options: [
        "Yes, share with third parties for offers and promotions",
        "Only share with partners necessary for providing required service",
        "Do not share my data with any third parties",
      ],
      permissionTranslation: [
        {
          language: "English",
          languageCode: "en",
          text: "<p><strong></strong>Can we share your data with our trusted partners?</p>",
          options: [
            "Yes, share with third parties for offers and promotions",
            "Only share with partners necessary for providing required service",
            "Do not share my data with any third parties",
          ],
        },
        {
          language: "Hindi",
          languageCode: "hi",
          text: "क्या हम आपका डेटा हमारे विश्वसनीय भागीदारों के साथ साझा कर सकते हैं?",
          options: [
            "हां, ऑफ़र और प्रमोशन के लिए तीसरे पक्ष के साथ साझा करें",
            "केवल आवश्यक सेवा प्रदान करने के लिए आवश्यक भागीदारों के साथ साझा करें",
            "मेरा डेटा किसी तीसरे पक्ष के साथ साझा न करें",
          ],
        },
        {
          language: "Marathi",
          languageCode: "mr",
          text: "आम्ही तुमचा डेटा आमच्या विश्वासू भागीदारांसोबत शेअर करू शकतो का?",
          options: [
            "हो, ऑफर आणि जाहिरातींसाठी तृतीय पक्षांसोबत शेअर करा",
            "आवश्यक सेवा देण्यासाठी आवश्यक असलेल्या भागीदारांसहच शेअर करा",
            "माझा डेटा कोणत्याही तृतीय पक्षांसोबत शेअर करू नका.",
          ],
        },
      ],
    },
  ];
  const languageDropdown = document.getElementById("languageDropdown");

  function updateTranslations(lang) {
    // Update branding
    const brandTrans = brandingTranslation.find(bt => bt.language.toLowerCase() === lang);
    if (brandTrans) {
      document.querySelector('[data-translate="companyName"]').textContent = brandTrans.companyName || branding.companyName;
      document.querySelector('[data-translate="submitBtn"]').textContent = brandTrans.primaryButtonLabel || branding.primaryButtonLabel;
      document.querySelector('[data-translate="cancelBtn"]').textContent = brandTrans.secondaryButtonLabel || branding.secondaryButtonLabel;
    }

    // Clear and re-render permissions
    const container = document.getElementById("permissions");
    container.innerHTML = "";

    permissions.forEach(permission => {
  const translation = permission.permissionTranslation.find(pt => pt.language.toLowerCase() === lang);
  const rawText = translation?.text || permission.text;
  const text = rawText.trim(); // ✅ Keep styles like <span style="color:#d93f0b">

  const options = translation?.options || permission.options || [];

  const block = document.createElement('div');
  block.className = 'permission-block';

  const question = document.createElement('p');
  question.setAttribute('data-translate-text', permission.id);

     if (permission.mandatory) {
        question.innerHTML = `${text} <span class="mandatory">*</span>`;
      }  else {
    question.innerHTML = text;
  }

  block.appendChild(question);

      if (permission.elementType === 'CHECKBOX') {
        options.forEach(option => {
          const label = document.createElement('label');
          label.className = 'checkbox-label';
          label.innerHTML = `<input type="checkbox" name="${permission.id}" value="${option}" data-translate-option="${permission.id}"> ${option}`;
          block.appendChild(label);
        });
      } else if (permission.elementType === 'RADIOBUTTON') {
        options.forEach(option => {
          const label = document.createElement('label');
          label.className = 'radio-label';
          label.innerHTML = `<input type="radio" name="${permission.id}" value="${option}" data-translate-option="${permission.id}"> ${option}`;
          block.appendChild(label);
        });
      } else if (permission.elementType === 'DROPDOWN') {

        if (permission.allowMultipleSelection) {
          const wrapper = document.createElement('div');
          wrapper.className = 'custom-multiselect-wrapper';
        
          const displayBox = document.createElement('div');
          displayBox.className = 'custom-multiselect-display';
        
          // Create span to hold the selected text
          const displayText = document.createElement('span');
          displayText.className = 'custom-multiselect-text';
          displayText.textContent = 'Select options';
        
          displayBox.appendChild(displayText);
          wrapper.appendChild(displayBox);
        
          const optionsBox = document.createElement('div');
          optionsBox.className = 'custom-options-box';
        
          options.forEach(opt => {
            const label = document.createElement('label');
            label.className = 'custom-option';
        
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = opt;
            checkbox.name = permission.id;
        
            checkbox.addEventListener('change', () => {
              const selected = Array.from(wrapper.querySelectorAll('input[type="checkbox"]:checked'))
                .map(cb => cb.value);
              const selectedText = selected.join(', ');
              displayText.textContent = selected.length ? selectedText : 'Select options';
              displayBox.title = selected.length ? selectedText : '';
            });
        
            label.appendChild(checkbox);
            label.append(opt);
            optionsBox.appendChild(label);
          });
        
          wrapper.appendChild(optionsBox);
        
          displayBox.addEventListener('click', () => {
            optionsBox.classList.toggle('show');
            displayBox.classList.toggle('open');
          });
        
          document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
              optionsBox.classList.remove('show');
              displayBox.classList.remove('open');
            }
          });
        
          block.appendChild(wrapper);
        }else{
           const select = document.createElement('select');
        select.className = 'dropdown';
        select.name = permission.id;
        select.setAttribute('data-translate-dropdown', permission.id);
        options.forEach(opt => {
          const optEl = document.createElement('option');
          optEl.value = opt;
          optEl.textContent = opt;
          select.appendChild(optEl);
        });
        block.appendChild(select);
        }
       
      }

      container.appendChild(block);
    });
  }

  languageDropdown.addEventListener("change", function () {
    updateTranslations(this.value.toLowerCase());
  });

  updateTranslations("english");

  let createConsentRequestList = [];
  let dataPrincipleIdList = [];

  // function setDataPrincipleIdList() {
  //   dataPrincipleIdList.push({ key: 'email', value: 'abc@c@emai.com' });
  // }

  function setDataPrincipleIdList() {
  // const email =  document.getElementById('inputEmail').value;
  const email =  'email';
  let obj = {
    key: 'email',
    value: email
  };
  dataPrincipleIdList.push(obj);
}



  function sendConsent() {
  const errorDiv = document.getElementById('error-message');
 
  fetch('https://demo-shp.qhtpl.com/cpm-api/consent/v1/createOrUpdateConsent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ createConsentRequestDtoWrapper: createConsentRequestList })
  }).then(res => res.json())
    .then(data => {
      if (data.response) {
        // Success case (optional: you can redirect or show success message here)
        console.log('API Response:', data);
    if (data.statusCode === 200) {
      showToast('Consent saved successfully!', 'success');
    } else {
      showToast(data.statusMessage || 'Something went wrong.', 'error');
    }
      } 
    setTimeout(() => window.location.reload(), 1500);
    })
    .catch(err => {
      // Network error or other failure
         console.error(err);
    showToast('Failed to submit. Please check your network connection.', 'error');
    setTimeout(() => window.location.reload(), 1500);
    });
}

    function showToast(message, type) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336'; // green for success, red for error
  toast.style.visibility = 'visible';
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.visibility = 'hidden';
    toast.style.opacity = '0';
  }, 3000); // hide after 3 seconds
}


  // function getFormValues() {
  //   setDataPrincipleIdList();
  //   createConsentRequestList = [];
  //   const container = document.querySelector(".consent");
  //   const elements = container.querySelectorAll('[name]');
  //   elements.forEach(el => {
  //     const name = el.name;
  //     const value = el.type === "checkbox" || el.type === "radio"
  //       ? el.checked ? el.value : null
  //       : el.value;

  //     if (value !== null && value !== undefined) {
  //       let request = createConsentRequestList.find(req => req.permissionId === name);
  //       if (!request) {
  //         request = {
  //           dataPrincipalIdList: dataPrincipleIdList,
  //           permissionId: name,
  //           consentReceivedType: "FORMS",
  //           optedFor: []
  //         };
  //         createConsentRequestList.push(request);
  //       }
  //       if (!request.optedFor.includes(value)) {
  //         request.optedFor.push(value);
  //       }
  //     }
  //   });
  //   console.log('Collected Form Data:', createConsentRequestList);
  //   sendConsent();
  // }

  function getFormValues() {
  setDataPrincipleIdList();
 
  let consentDiv = document.querySelector('#permissions');
  let checkboxes = consentDiv.querySelectorAll('input[type="checkbox"]:checked');
  let radioButtons = consentDiv.querySelectorAll('input[type="radio"]:checked');
  let dropdowns = consentDiv.querySelectorAll('select');
 
  checkboxes.forEach(checkbox => {
    let label = checkbox.closest('label') ? checkbox.closest('label').innerText : checkbox.value;
    let permissionId = checkbox.name;
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === permissionId) {
        createConsentRequestList[i].optedFor.push(label);
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: permissionId,
        consentReceivedType: 'FORMS',
        optedFor: [label],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  radioButtons.forEach(radioButton => {
    let label = radioButton.closest('label') ? radioButton.closest('label').innerText : radioButton.value;
    let permissionId = radioButton.name;
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === permissionId) {
        createConsentRequestList[i].optedFor.push(label);
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: permissionId,
        consentReceivedType: 'FORMS',
        optedFor: [label],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  dropdowns.forEach(dropdown => {
    let selectedOption = dropdown.options[dropdown.selectedIndex];
    let permissionId = dropdown.name;
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === permissionId) {
        createConsentRequestList[i].optedFor.push(selectedOption.innerText);
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: permissionId,
        consentReceivedType: 'FORMS',
        optedFor: [selectedOption.innerText],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  const consentElements = document.querySelectorAll('.consent [name]');
 
  consentElements.forEach(element => {
    const name = element.getAttribute('name');
    let permissionFound = false;
    let obj = createConsentRequestList.find((o, i) => {
      if (o.permissionId === name) {
        permissionFound = true;
        return true;
      }
    });
 
    if (!permissionFound) {
      let request = {
        dataPrincipalIdList: dataPrincipleIdList,
        permissionId: name,
        consentReceivedType: 'FORMS',
        optedFor: [],
        consentLanguage : languageDropdown.value.toLowerCase()
      };
      createConsentRequestList.push(request);
    }
  });
 
  console.log("Final Consent Payload:", createConsentRequestList);
  sendConsent();
}

 document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  
  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => el.remove());
  document.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border'));

  const container = document.querySelector(".consent");
  const elements = container.querySelectorAll('[name]');
  
  let hasError = false;
  let permissionTracker = {};

  elements.forEach(el => {
    const name = el.name;
    const value = (el.type === "checkbox" || el.type === "radio")
      ? el.checked ? el.value : null
      : el.value.trim();

    if (!permissionTracker[name]) {
      permissionTracker[name] = [];
    }
    if (value !== null && value !== undefined) {
      permissionTracker[name].push(value);
    }
  });

  // Validate mandatory permissions
  permissions.forEach(permission => {
    if (permission.mandatory) {
      const selectedValues = permissionTracker[permission.id] || [];
      if (selectedValues.length === 0) {
        hasError = true;

        // Find the related permission block
        const block = Array.from(document.querySelectorAll(".permission-block"))
          .find(div => {
            const p = div.querySelector('p[data-translate-text]');
            return p && p.getAttribute('data-translate-text') === permission.id;
          });

        if (block) {
          // Add error message
          const error = document.createElement('div');
          error.className = 'error-message';
          error.textContent = 'This field is required.';
          block.appendChild(error);

          // Highlight options
          const inputs = block.querySelectorAll('input, select');
          inputs.forEach(input => input.classList.add('error-border'));
        }
      }
    }
  });

  if (!hasError) {
    getFormValues();  // Only submit if no error
  }
});

});
