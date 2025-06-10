export const ContactMap = () => {
  return (
    <div className="bg-[#E8C8A1] py-10 px-4 flex justify-center">
      <div className="w-full max-w-4xl text-center">
        <div className="relative rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.3222553932465!2d115.18483120934835!3d-8.643746787867133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239d872a3e757%3A0x4d9bb0101a90af3e!2sWarung%20MenNara!5e1!3m2!1sid!2sid!4v1749276579282!5m2!1sid!2sid"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};
