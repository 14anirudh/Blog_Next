import React from "react";

const kernel = () => {
  return (
    <div className="mb-80 mx-16">
      <h1 className="text-center text-4xl my-4">Kernel:Brain of Operating Systems</h1>
      The kernel is a computer program at the core of a computer's operating
      system and generally has complete control over everything in the system.
      It is the portion of the operating system code that is always resident in
      memory and facilitates interactions between hardware and software
      components. A full kernel controls all hardware resources (e.g. I/O,
      memory, cryptography) via device drivers, arbitrates conflicts between
      processes concerning such resources, and optimizes the utilization of
      common resources e.g. CPU & cache usage, file systems, and network
      sockets. On most systems, the kernel is one of the first programs loaded
      on startup (after the bootloader). It handles the rest of startup as well
      as memory, peripherals, and input/output (I/O) requests from software,
      translating them into data-processing instructions for the central
      processing unit.
      <br />
      The critical code of the kernel is usually loaded into a separate area of
      memory, which is protected from access by application software or other
      less critical parts of the operating system. The kernel performs its
      tasks, such as running processes, managing hardware devices such as the
      hard disk, and handling interrupts, in this protected kernel space. In
      contrast, application programs such as browsers, word processors, or audio
      or video players use a separate area of memory, user space. This
      separation prevents user data and kernel data from interfering with each
      other and causing instability and slowness, as well as preventing
      malfunctioning applications from affecting other applications or crashing
      the entire operating system. Even in systems where the kernel is included
      in application address spaces, memory protection is used to prevent
      unauthorized applications from modifying the kernel.
      <br />
      There are different kernel architecture designs. Monolithic kernels run
      entirely in a single address space with the CPU executing in supervisor
      mode, mainly for speed. Microkernels run most but not all of their
      services in user space,like user processes do, mainly for resilience and
      modularity.MINIX 3 is a notable example of microkernel design. Instead,
      the Linux kernel is monolithic, although it is also modular, for it can
      insert and remove loadable kernel modules at runtime. This central
      component of a computer system is responsible for executing programs. The
      kernel takes responsibility for deciding at any time which of the many
      running programs should be allocated to the processor or processors.
    </div>
  );
};

export default kernel;
