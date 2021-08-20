import p5 from "p5";

const sketch = (p: p5) => {
	p.setup = () => {
		p.createCanvas(400, 400);
	};

	p.draw = () => {
		p.background(220);
		p.ellipse(200, 200, 100, 100);
	};
};

new p5(sketch);