<template>
  <div>
    <div class="flex justify-center h-screen/60 mb-6">
      <TheHero />
    </div>
    <div class="mb-6">
      <TheAbout />
    </div>
    <div class="flex flex-col md:flex-row space-y-6 mb-6 md:space-y-0">
      <TheCourses class="flex-1" />
      <TheSkills class="flex-1" />
    </div>
    <div>
      <ProjectCard />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>
