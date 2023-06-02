import { Outlet } from "react-router";

export default function Root() {
  return (
    <div id="root-route-component">
      <Outlet />
    </div>
  );
}
