const BASE_URL = "https://n3o-coding-task-react.azurewebsites.net/api/v1";

export const getDonationItems = async () => {
  const res = await fetch(`${BASE_URL}/donationItems/all`);
  const text = await res.text();
  return text ? JSON.parse(text) : [];
};

export const getDonationStatuses = async () => {
  const res = await fetch(`${BASE_URL}/donationItems/statuses`);
  const text = await res.text();
  return text ? JSON.parse(text) : [];
};


export const getLocations = () =>
  fetch(`${BASE_URL}/donationItems/locations`).then((res) => res.json());

export const getThemes = () =>
  fetch(`${BASE_URL}/donationItems/themes`).then((res) => res.json());

export const createDonationItem = async (payload) => {
  const res = await fetch(`${BASE_URL}/donationItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return true;
};

