const thyme = require("../../util/thyme");

describe("thyme", () => {
  it("converts number mojo to thyme", () => {
    const result = thyme.mojo_to_thyme(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to thyme", () => {
    const result = thyme.mojo_to_thyme("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to thyme string", () => {
    const result = thyme.mojo_to_thyme_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to thyme string", () => {
    const result = thyme.mojo_to_thyme_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number thyme to mojo", () => {
    const result = thyme.thyme_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string thyme to mojo", () => {
    const result = thyme.thyme_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = thyme.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = thyme.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = thyme.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = thyme.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = thyme.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = thyme.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
