const listMeds = [
  {
    med_id: 1,
    med_name: "buscopan",
    med_description:
      "Buscopan is a popular muscle relaxant and spasm reliever with the active ingredient being hyoscine butylbromide.",
    med_dosage: "1-2 tablets/time, can be used up to 4 times/day",
    med_image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Buscopan1.JPG',
    med_notes:
      "Buscopan is a muscle relaxant, so caution should be exercised when using it in pregnant women and nursing mothers due to information on adverse effects on the fetus or drug concentrations and metabolites in breast milk. limited.",
  },

  {
    med_id: 2,
    med_name: "efferalgan",
    med_description:
      "Efferalgan is a pain reliever, antipyretic used to treat a wide variety of symptoms.",
    med_dosage: "The maximum daily dose should not exceed 3g.",
    med_image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Efferalgan1.jpg',
    med_notes:
      "Efferalgan can be used at home, so patients need to know the effects, safe doses of the drug as well as unwanted side effects of Efferalgan before using it. The drug needs to be adjusted in dose and duration for people with liver and kidney failure.",
  },

  {
    med_id: 3,
    med_name: "livcaring",
    med_image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Livcaring1.JPG',
    med_description:
      "Livcaring helps cool down, detoxify strengthens the metabolic function of the liver, cools the liver.",
    med_dosage:
      "The first week take 3 times a day, 2 tablets each time, the following weeks take 2 times a day, 2 tablets each time. Take after eating.",
    med_notes:
      "For people with high liver enzymes, impaired liver function, liver dysfunction.",
  },

  {
    med_id: 4,
    med_name: "panadol",
    med_image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/panadol1.jpeg',
    med_description:
      "It is recommended for the treatment of most symptoms of mild to moderate pain and fever, eg: Headache, migraine, backache, toothache, joint pain, menstrual pain, relief of cold symptoms colds, flu and sore throat.",
    med_dosage:
      "Adults (including the elderly) and children 12 years of age and older: take 1 or 2 tablets every 4 to 6 hours as needed. Maximum daily dose: 8 tablets.",
    med_notes:
      "For oral use only. No overdose specified. Panadol Extra can be taken on an empty stomach. The lowest dose needed to be effective for the shortest duration of treatment should be used. Duration of self-treatment should not exceed 3 days.",
  },
  {
    med_id: 5,
    med_name: "paracetamol",
    med_image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Paracetamol1.JPG',
    med_description:
      "Paracetamol is a pain reliever and fever reducer commonly used in the treatment of headache, muscle pain, joint pain, back pain, toothache, flu...",
    med_dosage:
      "Dose 10-15 mg/kg/dose every 4-6 hours as needed (maximum 5 doses in 24 hours).",
    med_notes:
      "Paracetamol is often indicated for the treatment of mild to moderate pain and fever such as headache, muscle pain, joint pain, backache, toothache, fever... If you have mild arthritis, in more severe cases such as inflammation of the joints, the use of Paracetamol will not be effective.",
  },
  {
    med_id: 6,
    med_name: "vinafolin",
    med_image: 'https://hackathon2023teamv.s3.ap-southeast-1.amazonaws.com/Vinafolin1.JPG',
    med_description:
      "Vinafolin is an ETC drug used in the treatment of hormone replacement in postmenopausal women (treatment of moderate and severe vasomotor disorders, prevention of osteoporosis caused by menopause) and in women with hypogonadism.",
    med_dosage:
      "Dose 0.02 – 0.05 mg daily, given cyclically; however, some people respond well to low doses of 0.02 mg once every two days.",
    med_notes:
      "Ethinylestradiol should not be used in patients who are pregnant or suspected of being pregnant because taking ethinylestradiol may cause serious harm to pregnancy; have or suspected of having estrogen - dependent tumors; have or suspected of having breast carcinomas.",
  },
];

export const getDetailMed = async (id) => {
  try {
    const res = listMeds.find((med) => med.med_id == id);
    return res
  } catch (err) {
    return console.log(err);
  }
};
