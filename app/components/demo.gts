import Example from './example';

// TS made this file go from 4 lines to 10
// :shrug:
// makes more sense outside such simple components, I guess. And when we ditch the registry entirely, that's 6 lines reclaimed
const Demo = <template>
  <Example />
</template>

export default Demo;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Demo: typeof Demo;
  }
}
