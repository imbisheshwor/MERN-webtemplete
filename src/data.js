import dashboard from "./custom/image/icon/dashboard.png"
import contacts from "./custom/image/icon/contacts.png"
import items from "./custom/image/icon/items.png"
import kithcen from "./custom/image/icon/kitchen.png"
import sales from "./custom/image/icon/sales.png"
import bills from "./custom/image/icon/bills.png"
import expenses from "./custom/image/icon/expenses.png"
import accounting from "./custom/image/icon/accounting.png"
import task from "./custom/image/icon/task.png"
import appointments from "./custom/image/icon/appointments.png"
import reports from "./custom/image/icon/report.png"

export const menu = [
  {
    id: 1,
    icon: dashboard,
    title: "Dashboard",
    drop: false,
    link: "#",
  },
  {
    id: 2,
    icon: contacts,
    title: "Contacts",
    drop: false,
    link: "#",
  },

  {
    id: 4,
    icon: items,
    title: "Items",
    drop: true,
    link: "#",
    data: [
      {
        link: "#",
        title: "data1"
      },
      {
        link: "#",
        title: "data 2",
      },
      {
        link: "#",
        title: "data 3",
      }
    ]
  },
  {
    id: 5,
    icon: kithcen,
    title: "Kitchen",
    drop: true,
    link: "#",
    data: [
      {
        link: "#",
        title: "data1"
      },
      {
        link: "#",
        title: "data 2",
      },
      {
        link: "#",
        title: "data 3",
      }
    ]
  },
  {
    id: 6,
    icon: sales,
    title: "Sales",
    drop: true,
    link: "#",
    data: [
      {
        link: "#",
        title: "data1"
      },
      {
        link: "#",
        title: "data 2",
      },
      {
        link: "#",
        title: "data 3",
      }
    ]
  },
  {
    id: 7,
    icon: bills,
    title: "Bills",
    drop: false,
    link: "#",
  },
  {
    id: 8,
    icon: expenses,
    title: "Expenses",
    drop: true,
    link: "#",
    data: [
      {
        link: "#",
        title: "data1"
      },
      {
        link: "#",
        title: "data 2",
      },
      {
        link: "#",
        title: "data 3",
      }
    ]
  },
  {
    id: 9,
    icon: accounting,
    title: "Accounting",
    drop: true,
    link: "#",
    data: [
      {
        link: "#",
        title: "data1"
      },
      {
        link: "#",
        title: "data 2",
      },
      {
        link: "#",
        title: "data 3",
      }
    ]
  },
  {
    id: 10,
    icon: task,
    title: "Tasks",
    drop: false,
    link: "#",
  },
  {
    id: 11,
    icon: appointments,
    title: "Appointments",
    drop: false,
    link: "#",
  },
  {
    id: 12,
    icon: reports,
    title: "Reports",
    drop: false,
    link: "#",
  }

];

