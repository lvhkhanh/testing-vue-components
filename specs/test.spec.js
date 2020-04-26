import TestComponent from "@/test.vue";
import { mount, shallowMount } from "@vue/test-utils";
import List from "@/list";
test("mount a vue component", () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: "New Value",
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test("ListComponent shallow", () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  wrapper.setData({ marvelMovies: [...movies, "End Game"] });
  expect(wrapper.html()).toMatchSnapshot();
  console.log(wrapper.html());
  console.log(shallowMount(List).html());
});
