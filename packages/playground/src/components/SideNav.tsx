import { A } from "@solidjs/router";
import { NSideNav, SideNavListItem } from "@nordstjerna/ui";

const SideNav = () => {
  const menu: SideNavListItem[] = [
    {
      key: "Introduction",
      title: "Introduction",
      icon: <div class="i-ion:book"></div>,
    },
    {
      key: "Style",
      title: "Style",
      icon: <div class="i-ion:book"></div>,
    },
    {
      key: "Components",
      title: "Components",
      icon: <div class="i-fa6-solid:clone"></div>,
      children: [
        {
          key: "Button",
          title: "Button",
        },
        {
          key: "Toast",
          title: "Toast",
        },
        {
          key: "Tooltip",
          title: "Tooltip",
        },
      ],
    },
    {
      key: "Dashboard",
      title: "Dashboard",
      icon: <div class="i-fa6-solid:house"></div>,
      children: [
        { key: "Home", title: "Home" },
        { key: "Analytics", title: "Analytics" },
      ],
    },
    {
      key: "Projects",
      title: "Projects",
      icon: <div class="i-fa6-solid:house"></div>,
      children: [
        { key: "All Projects", title: "All Projects" },
        { key: "Create Project", title: "Create Project" },
      ],
    },
    {
      key: "Team",
      title: "Team",
      icon: <div class="i-fa6-solid:users"></div>,
      children: [
        { key: "Roles", title: "Roles" },
        {
          key: "Members",
          title: "Members",
          icon: <div class="i-fa6-solid:users"></div>,
          children: [
            {
              key: "Invite Members",
              title: "Invite Members",
              // icon: <div class="i-fa6-solid:users"></div>,
            },
            {
              key: "All Members",
              title: "All Members",
            },
          ],
        },
        { key: "Groups", title: "Groups" },
      ],
    },
    {
      key: "Settings",
      title: "Settings",
      icon: <div class="i-fa6-solid:house"></div>,
      //   items: ["Profile", "Preferences", "Notifications"],
    },
  ];

  const handleClick = (item: SideNavListItem) => {
    console.log(item);
  };

  return (
    <>
      <NSideNav
        items={menu}
        onClick={handleClick}
        renderWrapper={(ele, item) => {
          const routeMap: { [key: string]: string } = {
            Introduction: "/",
            Style: "/style",
            Button: "/",
            Toast: "/about",
            Tooltip: "/tooltip",
          };
          const route = routeMap[item.key] ? routeMap[item.key] : "/";

          if (item.children) {
            return ele;
          } else {
            return <A href={route}>{ele}</A>;
          }
        }}
      />
    </>
  );
};

export default SideNav;
