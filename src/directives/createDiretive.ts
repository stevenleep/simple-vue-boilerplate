import { Directive } from "vue";

export default function createDirective(name: string, directive: Directive) {
  // ...
  return {
    name,
    directive,
    timestamp: Date.now(),
  };
}
