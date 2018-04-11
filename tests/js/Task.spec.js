import Task from '../../resources/assets/js/components/Task.vue';
import { mount } from 'vue-test-utils';
import expect from 'expect';
import axios from 'axios';
import moxios from 'moxios';

describe('Task', () => {
  let wrapper;

  beforeEach(() => {
    moxios.install();
    wrapper = mount(Task);
  });

  afterEach(() => {
    moxios.uninstall()
  });

  /*it('Task chargé', () => {
    wrapper = mount(Task);

    //expect(wrapper.find('#task').html()).toMatxh(/string/);
    expect(wrapper.vm.count).toBe(0);
  });*/

  it('Chargement du titre', () => {
    see('taches');
  });

  it('Test d\'une requette direct', () => {
    wrapper = mount(Task);

    moxios.stubRequest('/tasks', {
      status: 200
    });

  });

  it('Test clcik sur bouton test', () => {
    click('#testo');
  });

  let click = (selector) => {
    wrapper.find(selector).trigger('clcik');
  };

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrap.html()).toContain(text);
  };

  let type = (selector, text) => {
    let node = wrapper.find(selector);
    node.element.value = text;

    node.trigger('input');
  };
});