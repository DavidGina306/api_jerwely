<template>
  <div class="wrapper">
    <navbar-template></navbar-template>
    <sidebar-template></sidebar-template>
    <div class="content-wrapper">
      <router-view />
    </div>
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
    <footer-template></footer-template>
  </div>
</template>
<script>
import FooterTemplate from "../components/FooterTemplate";
import NavbarTemplate from "../components/NavBarTemplate";
import SidebarTemplate from "../components/SideBarTemplate";
export default {
  computed: {},
  components: {
    NavbarTemplate,
    SidebarTemplate,
    FooterTemplate,
  },
  data() {
    return {
      message: "Hello oi",
    };
  },
};
</script>
