import { useQuery, useMutation } from "@tanstack/react-query";

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Industry = {
  name: string;
  icon: string;
};

export type CompanyInfo = {
  description: string;
  values: string[];
  phoneNumbers: string[];
  email: string;
};

const mockServices = [
  { title: "Transportation & Freight", description: "FTL and PTL services", icon: "truck" },
  { title: "3PL Warehousing", description: "Warehousing solutions", icon: "warehouse" }
];

const mockIndustries = [
  { name: "E-commerce", icon: "shopping-cart" },
  { name: "Manufacturing", icon: "factory" }
];

const mockCompanyInfo = {
  description: "Leading logistics provider",
  values: ["Trust", "Discipline", "Transparency"],
  phoneNumbers: ["8432312949", "9158312949"],
  email: "SSBTS3481@gmail.com"
};

export function useServices() {
  return useQuery({ queryKey: ["services"], queryFn: async () => mockServices });
}

export function useIndustries() {
  return useQuery({ queryKey: ["industries"], queryFn: async () => mockIndustries });
}

export function useCompanyInfo() {
  return useQuery({ queryKey: ["companyInfo"], queryFn: async () => mockCompanyInfo });
}

export function useSubmitContactForm() {
  return useMutation({
    mutationFn: async (data) => {
      console.log("Contact form submitted:", data);
      return { success: true };
    }
  });
}
