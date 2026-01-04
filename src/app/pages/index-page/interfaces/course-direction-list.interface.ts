export interface CourseDirectionsList {
  listName: string;
  items: CourseDirectionsListItem[];
}

interface CourseDirectionsListItem {
  text: string;
  link: string;
}
