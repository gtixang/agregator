export interface CourseFilters {
  payment: {
    paid: boolean;
    free: boolean;
  };

  price: {
    from: number;
    to: number;
  };

  schools: Record<string, boolean>;

  level: {
    junior: boolean;
    middle: boolean;
    senior: boolean;
    children: boolean;
  };

  durationMonths: {
    from: number;
    to: number;
  };

  additional: {
    internship: boolean;
    certificate: boolean;
  };
}
