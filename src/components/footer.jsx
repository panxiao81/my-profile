const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - Xiao Pan All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          辽ICP备2021012013号
        </a>
      </div>
    </footer>
  );
};

export default Footer;
