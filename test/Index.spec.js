/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import Index from "../pages/index.vue";

describe("Index", () => {
  it("test search input SET corrects data.", async () => {
    const wrapper = mount(Index);
    const textInput = wrapper.find("input[type='text']");
    await textInput.setValue("some value");

    expect(wrapper.find("input[type='text']").element.value).toBe("some value");
  });
});
