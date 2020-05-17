import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(HelloWorld);
});

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  });

});

describe("Test method", () => {

  beforeEach(() => {
    wrapper.vm.doSomething();
  });

  it("say hi", () => {
    expect(wrapper.emitted().greeting[0])
        .toEqual(["hi"]);
  });

});
