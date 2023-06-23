import { MenuBar } from "@/components";

export default function Custom404() {
  return (
    <>
      <MenuBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>404 - Page Not Found</h1>
      </div>
    </>
  )
}