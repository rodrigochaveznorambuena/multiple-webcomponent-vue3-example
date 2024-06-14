<template>
  <div>
    <dynamic-form
      title="This is a custom title"
    >
      <h1>
        This is the default slot passed to Web Components
      </h1>
      <h2
        slot="title"
        class="titleContainer"
      >
        This is the "subtitle" slot
      </h2>
    </dynamic-form>
    <simple-form>
      <h1>
        This is a title with h1
      </h1>
    </simple-form>
  </div>
</template>
