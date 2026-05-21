import api from "./api";


export const getApplicationById = (id) =>
   api.get(`/admin/applications/${id}`);

export const approveApplication = (id) =>
   api.post(`/admin/applications/${id}/approve`);

export const rejectApplication = (id) =>
   api.post(`/admin/applications/${id}/reject`);

export const getApplications = (status) =>
  api.get("/admin/applications", {
    params: {
      status: status,
    },
  });